// Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HumyRestaurantAPI.Data;
using HumyRestaurantAPI.Models;

namespace HumyRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/users/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterDto userDto)
        {
            try
            {
                Console.WriteLine($"Received registration for: {userDto.Email}");

                // User verification
                var existingUser = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == userDto.Email);

                if (existingUser != null)
                {
                    return BadRequest(new { message = "This email is already registered" });
                }

                // Date
                DateTime dateOfBirth;
                if (!DateTime.TryParse(userDto.DateOfBirth, out dateOfBirth))
                {
                    return BadRequest(new { message = "Invalid date of birth format" });
                }

                var user = new User
                {
                    Email = userDto.Email,
                    FirstName = userDto.FirstName,
                    LastName = userDto.LastName,
                    MobileNumber = userDto.MobileNumber,
                    DateOfBirth = dateOfBirth,
                    DiscountCode = userDto.DiscountCode,
                    Password = userDto.Password,
                    CreatedDate = DateTime.Now,
                    IsActive = true
                };

                Console.WriteLine($"Creating user: {user.Email}, {user.FirstName} {user.LastName}");

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                Console.WriteLine($"User created successfully with ID: {user.UserId}");

                return Ok(new
                {
                    message = "User registered successfully",
                    userId = user.UserId,
                    email = user.Email,
                    firstName = user.FirstName,
                    lastName = user.LastName
                });
            }
            catch (DbUpdateException dbEx)
            {
                Console.WriteLine($"Database error: {dbEx.Message}");
                Console.WriteLine($"Inner exception: {dbEx.InnerException?.Message}");
                return StatusCode(500, new { message = "Database error", error = dbEx.InnerException?.Message ?? dbEx.Message });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"General error: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
                return StatusCode(500, new { message = "An error occurred during registration", error = ex.Message });
            }
        }

        // GET: api/users/check/{email}
        [HttpGet("check/{email}")]
        public async Task<IActionResult> CheckUserExists(string email)
        {
            try
            {
                Console.WriteLine($"Checking if user exists: {email}");
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == email);

                var exists = user != null;
                Console.WriteLine($"User exists: {exists}");

                return Ok(new { exists = exists });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error checking user: {ex.Message}");
                return StatusCode(500, new { message = "An error occurred", error = ex.Message });
            }
        }

        // POST: api/users/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {
                Console.WriteLine($"Login attempt for: {request.Email}");

                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == request.Email);

                if (user == null)
                {
                    return BadRequest(new { message = "Invalid email or password" });
                }

                if (user.Password != request.Password)
                {
                    return BadRequest(new { message = "Invalid email or password" });
                }

                Console.WriteLine($"User logged in: {user.Email}");

                return Ok(new
                {
                    userId = user.UserId,
                    email = user.Email,
                    firstName = user.FirstName,
                    lastName = user.LastName,
                    mobileNumber = user.MobileNumber
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Login error: {ex.Message}");
                return StatusCode(500, new { message = "An error occurred during login", error = ex.Message });
            }
        }
        // POST: api/users/reset-password
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            try
            {
                Console.WriteLine($"Reset password for: {request.Email}");

                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == request.Email);

                if (user == null)
                {
                    return BadRequest(new { message = "User not found" });
                }

                // New password
                user.Password = request.NewPassword;

                _context.Users.Update(user);
                await _context.SaveChangesAsync();

                Console.WriteLine($"Password reset successfully for: {request.Email}");

                return Ok(new { message = "Password reset successfully" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Reset password error: {ex.Message}");
                return StatusCode(500, new { message = "An error occurred", error = ex.Message });
            }
        }
    }

    // DTO Log in
    public class UserRegisterDto
    {
        public string Email { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string MobileNumber { get; set; } = string.Empty;
        public string DateOfBirth { get; set; } = string.Empty;
        public string? DiscountCode { get; set; }
        public string Password { get; set; } = string.Empty;
    }

    // Logg in
    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
    // request for password
    public class ResetPasswordRequest
    {
        public string Email { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
    }
}
// Models/User.cs
using System.ComponentModel.DataAnnotations;

namespace HumyRestaurantAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        
        [Required]
        public string FirstName { get; set; } = string.Empty;
        
        [Required]
        public string LastName { get; set; } = string.Empty;
        
        [Required]
        public string MobileNumber { get; set; } = string.Empty;
        
        public DateTime DateOfBirth { get; set; }
        
        public string? DiscountCode { get; set; }
        
        [Required]
        public string Password { get; set; } = string.Empty;
        
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public bool IsActive { get; set; } = true;
    }
}
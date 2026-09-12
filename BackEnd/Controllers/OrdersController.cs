// Controllers/OrdersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HumyRestaurantAPI.Data;
using HumyRestaurantAPI.Models;

namespace HumyRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/orders
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderDto orderDto)
        {
            try
            {
                Console.WriteLine($"Received order from: {orderDto.Email}");
                Console.WriteLine($"Total amount: {orderDto.TotalAmount}");
                Console.WriteLine($"Items count: {orderDto.Items?.Count ?? 0}");

                // التحقق من وجود المستخدم
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == orderDto.Email);

                if (user == null)
                {
                    Console.WriteLine($"User not found: {orderDto.Email}");
                    return BadRequest(new { message = "User not found. Please login first." });
                }

                Console.WriteLine($"User found: {user.UserId} - {user.Email}");

                // إنشاء الطلب
                var order = new Order
                {
                    UserId = user.UserId,
                    OrderDate = DateTime.Now,
                    TotalAmount = orderDto.TotalAmount,
                    Status = "Pending",
                    DeliveryAddress = orderDto.DeliveryAddress ?? "",
                    PhoneNumber = orderDto.PhoneNumber ?? "",
                    DeliveryNotes = orderDto.DeliveryNotes ?? ""
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                Console.WriteLine($"Order created with ID: {order.OrderId}");

                // إنشاء تفاصيل الطلب
                if (orderDto.Items != null && orderDto.Items.Any())
                {
                    foreach (var item in orderDto.Items)
                    {
                        var orderDetail = new OrderDetail
                        {
                            OrderId = order.OrderId,
                            DishId = item.DishId > 0 ? item.DishId : 1, // إذا كان 0 استخدم قيمة افتراضية
                            DishName = item.Name ?? "Unknown",
                            DishImage = item.Image ?? "",
                            Extras = item.Extras != null && item.Extras.Any() ? string.Join(", ", item.Extras) : "",
                            Price = item.Price,
                            Quantity = item.Quantity > 0 ? item.Quantity : 1,
                            Kitchen = item.Kitchen ?? ""
                        };
                        _context.OrderDetails.Add(orderDetail);
                    }

                    await _context.SaveChangesAsync();
                    Console.WriteLine($"Order details saved: {orderDto.Items.Count} items");
                }

                return Ok(new
                {
                    message = "Order placed successfully!",
                    orderId = order.OrderId,
                    status = order.Status
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
                Console.WriteLine($"Order error: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
                return StatusCode(500, new { message = "An error occurred", error = ex.Message });
            }
        }

        // GET: api/orders/user/{email}
        [HttpGet("user/{email}")]
        public async Task<IActionResult> GetUserOrders(string email)
        {
            try
            {
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == email);

                if (user == null)
                {
                    return BadRequest(new { message = "User not found" });
                }

                var orders = await _context.Orders
                    .Where(o => o.UserId == user.UserId)
                    .Include(o => o.OrderDetails)
                    .OrderByDescending(o => o.OrderDate)
                    .Select(o => new
                    {
                        o.OrderId,
                        o.OrderDate,
                        o.TotalAmount,
                        o.Status,
                        o.DeliveryAddress,
                        o.PhoneNumber,
                        Items = o.OrderDetails.Select(d => new
                        {
                            d.DishName,
                            d.Price,
                            d.Quantity,
                            d.Extras,
                            d.Kitchen
                        })
                    })
                    .ToListAsync();

                return Ok(orders);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Get orders error: {ex.Message}");
                return StatusCode(500, new { message = "An error occurred", error = ex.Message });
            }
        }

        // GET: api/orders/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrderById(int id)
        {
            try
            {
                var order = await _context.Orders
                    .Where(o => o.OrderId == id)
                    .Include(o => o.OrderDetails)
                    .Select(o => new
                    {
                        o.OrderId,
                        o.OrderDate,
                        o.TotalAmount,
                        o.Status,
                        o.DeliveryAddress,
                        o.PhoneNumber,
                        Items = o.OrderDetails.Select(d => new
                        {
                            d.DishName,
                            d.Price,
                            d.Quantity,
                            d.Extras,
                            d.Kitchen
                        })
                    })
                    .FirstOrDefaultAsync();

                if (order == null)
                {
                    return NotFound(new { message = "Order not found" });
                }

                return Ok(order);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Get order error: {ex.Message}");
                return StatusCode(500, new { message = "An error occurred", error = ex.Message });
            }
        }
    }

    // DTOs
    public class CreateOrderDto
    {
        public string Email { get; set; } = string.Empty;
        public decimal TotalAmount { get; set; }
        public string? DeliveryAddress { get; set; }
        public string? PhoneNumber { get; set; }
        public string? DeliveryNotes { get; set; }
        public List<OrderItemDto> Items { get; set; } = new List<OrderItemDto>();
    }

    public class OrderItemDto
    {
        public int DishId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Image { get; set; }
        public List<string>? Extras { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string? Kitchen { get; set; }
    }
}
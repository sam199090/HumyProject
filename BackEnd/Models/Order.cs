// Models/Order.cs
using System.ComponentModel.DataAnnotations;

namespace HumyRestaurantAPI.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public DateTime OrderDate { get; set; } = DateTime.Now;

        [Required]
        public decimal TotalAmount { get; set; }

        [Required]
        public string Status { get; set; } = "Pending"; // Pending, Confirmed, Preparing, Delivering, Delivered

        public string? DeliveryAddress { get; set; }
        public string? PhoneNumber { get; set; }
        public string? DeliveryNotes { get; set; }

        // العلاقة مع المستخدم
        public User? User { get; set; }

        // العلاقة مع تفاصيل الطلب
        public ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
    }
}
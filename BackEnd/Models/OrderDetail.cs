// Models/OrderDetail.cs
using System.ComponentModel.DataAnnotations;

namespace HumyRestaurantAPI.Models
{
    public class OrderDetail
    {
        [Key]
        public int OrderDetailId { get; set; }

        [Required]
        public int OrderId { get; set; }

        [Required]
        public int DishId { get; set; }

        [Required]
        public string DishName { get; set; } = string.Empty;

        public string? DishImage { get; set; }

        public string? Extras { get; set; } // مخزنة كـ JSON string

        [Required]
        public decimal Price { get; set; }

        [Required]
        public int Quantity { get; set; } = 1;

        public string? Kitchen { get; set; }

        // العلاقات
        public Order? Order { get; set; }
        public Dish? Dish { get; set; }
    }
}
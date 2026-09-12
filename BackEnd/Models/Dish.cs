namespace HumyRestaurantAPI.Models
{
    public class Dish
    {
        public int DishId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string? ImageUrl { get; set; }
        public int KitchenId { get; set; }
        public int CategoryId { get; set; }
        public int? PreparationTime { get; set; }
        public int? Calories { get; set; }
        public bool IsVegetarian { get; set; }
        public bool IsVegan { get; set; }
        public bool IsGlutenFree { get; set; }
        public bool IsAvailable { get; set; } = true;
        public decimal Rating { get; set; }
        public int TotalOrders { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        // العلاقات
        public Kitchen? Kitchen { get; set; }
        public Category? Category { get; set; }
    }
}
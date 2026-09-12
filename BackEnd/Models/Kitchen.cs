namespace HumyRestaurantAPI.Models
{
    public class Kitchen
    {
        public int KitchenId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        // Relations
        public ICollection<Dish> Dishes { get; set; } = new List<Dish>();
        public ICollection<Category> Categories { get; set; } = new List<Category>();
    }
}
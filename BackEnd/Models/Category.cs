namespace HumyRestaurantAPI.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; } = string.Empty;
        public int KitchenId { get; set; }
        public bool IsActive { get; set; } = true;

        // العلاقات
        public Kitchen? Kitchen { get; set; }
        public ICollection<Dish> Dishes { get; set; } = new List<Dish>();
    }
}
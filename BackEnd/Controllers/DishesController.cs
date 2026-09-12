using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HumyRestaurantAPI.Data;
using HumyRestaurantAPI.Models;

namespace HumyRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DishesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DishesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/dishes
        [HttpGet]
        public async Task<IActionResult> GetDishes()
        {
            var dishes = await _context.Dishes
                .Include(d => d.Kitchen)
                .Include(d => d.Category)
                .Where(d => d.IsAvailable)
                .Select(d => new
                {
                    d.DishId,
                    d.Name,
                    d.Description,
                    d.Price,
                    d.ImageUrl,
                    d.KitchenId,
                    d.CategoryId,
                    d.PreparationTime,
                    d.Calories,
                    d.IsVegetarian,
                    d.IsVegan,
                    d.IsGlutenFree,
                    d.IsAvailable,
                    d.Rating,
                    d.TotalOrders,
                    KitchenName = d.Kitchen != null ? d.Kitchen.Name : "",
                    CategoryName = d.Category != null ? d.Category.Name : ""
                })
                .ToListAsync();

            return Ok(dishes);
        }

        // GET: api/dishes/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDish(int id)
        {
            var dish = await _context.Dishes
                .Include(d => d.Kitchen)
                .Include(d => d.Category)
                .Where(d => d.DishId == id && d.IsAvailable)
                .Select(d => new
                {
                    d.DishId,
                    d.Name,
                    d.Description,
                    d.Price,
                    d.ImageUrl,
                    d.KitchenId,
                    d.CategoryId,
                    d.PreparationTime,
                    d.Calories,
                    d.IsVegetarian,
                    d.IsVegan,
                    d.IsGlutenFree,
                    d.IsAvailable,
                    d.Rating,
                    d.TotalOrders,
                    KitchenName = d.Kitchen != null ? d.Kitchen.Name : "",
                    CategoryName = d.Category != null ? d.Category.Name : ""
                })
                .FirstOrDefaultAsync();

            if (dish == null)
            {
                return NotFound("Food does not exist");
            }

            return Ok(dish);
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HumyRestaurantAPI.Data;
using HumyRestaurantAPI.Models;

namespace HumyRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/categories
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _context.Categories
                .Select(c => new
                {
                    c.CategoryId,
                    c.Name,
                    c.KitchenId
                })
                .ToListAsync();

            return Ok(categories);
        }
    }
}
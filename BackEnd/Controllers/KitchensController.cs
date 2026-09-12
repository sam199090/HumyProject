using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HumyRestaurantAPI.Data;
using HumyRestaurantAPI.Models;

namespace HumyRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class KitchensController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public KitchensController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/kitchens
        [HttpGet]
        public async Task<IActionResult> GetKitchens()
        {
            var kitchens = await _context.Kitchens
                .Select(k => new
                {
                    k.KitchenId,
                    k.Name,
                    k.Description,
                    k.ImageUrl
                })
                .ToListAsync();

            return Ok(kitchens);
        }

        // GET: api/kitchens/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetKitchen(int id)
        {
            var kitchen = await _context.Kitchens
                .Where(k => k.KitchenId == id)
                .Select(k => new
                {
                    k.KitchenId,
                    k.Name,
                    k.Description,
                    k.ImageUrl
                })
                .FirstOrDefaultAsync();

            if (kitchen == null)
            {
                return NotFound("Kitchen does not exist ");
            }

            return Ok(kitchen);
        }
    }
}
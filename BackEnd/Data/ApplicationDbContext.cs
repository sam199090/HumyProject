using Microsoft.EntityFrameworkCore;
using HumyRestaurantAPI.Models;

namespace HumyRestaurantAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Kitchen> Kitchens { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User> Users { get; set; }

        // Data/ApplicationDbContext.cs
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //   Dish   
            modelBuilder.Entity<Dish>()
                .HasOne(d => d.Kitchen)
                .WithMany(k => k.Dishes)
                .HasForeignKey(d => d.KitchenId);

            //   Dish   
            modelBuilder.Entity<Dish>()
                .HasOne(d => d.Category)
                .WithMany(c => c.Dishes)
                .HasForeignKey(d => d.CategoryId);

            // search
            modelBuilder.Entity<Dish>()
                .HasIndex(d => d.Name);

            modelBuilder.Entity<Dish>()
                .HasIndex(d => d.IsAvailable);

            // Email 
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }
    }
}
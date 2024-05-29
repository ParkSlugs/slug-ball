using Hu.API.EFModels;
using Microsoft.EntityFrameworkCore;
using PluralizeService.Core;

namespace Hu.API.Data
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    foreach (var entity in builder.Model.GetEntityTypes())
        //    {
        //        entity.SetTableName(PluralizationProvider.Singularize(entity.DisplayName()));
        //    }
        //}
        public DbSet<User> Users { get; set; }
    }
}

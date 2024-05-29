using Hu.API.Data;
using Hu.API.EFModels;
using Hu.API.RepositoryInterfaces;
using Microsoft.EntityFrameworkCore;

namespace Hu.API.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext dbContext;

        public UserRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<User> CreateAsync(User user)
        {
            await dbContext.Users.AddAsync(user);
            await dbContext.SaveChangesAsync();

            return user;
        }

        public async Task DeleteAsync(int userId)
        {
            await dbContext.Users.Where(u => u.Id == userId).ExecuteDeleteAsync();
            await dbContext.SaveChangesAsync();
        }

        public List<User> GetAll()
        {
            return dbContext.Users.ToList();
        }

        public User Get(int userId)
        {
            return dbContext.Users.Where(user => user.Id == userId).First();
        }

        public async Task UpdateAsync(User user)
        {
            dbContext.Users.Update(user);
            await dbContext.SaveChangesAsync();
        }
    }
}

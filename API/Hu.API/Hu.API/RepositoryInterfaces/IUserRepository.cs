using Hu.API.EFModels;

namespace Hu.API.RepositoryInterfaces
{
    public interface IUserRepository
    {
        Task<User> CreateAsync(User user);
        Task DeleteAsync(int userId);
        List<User> GetAll();
        User Get(int userId);
        Task UpdateAsync(User user);
    }
}

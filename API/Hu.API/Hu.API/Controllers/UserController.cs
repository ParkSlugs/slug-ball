using Hu.API.Dtos;
using Hu.API.EFModels;
using Hu.API.RepositoryInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace Hu.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : HuControllerBase<UserController>
    {
        private readonly IUserRepository userRepository;

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpPost()]
        public async Task<IActionResult> Insert(UserDto user)
        {
            var userModel = Mapper.Map<User>(user);

            await userRepository.CreateAsync(userModel);

            var response = Mapper.Map<UserDto>(userModel);

            return Ok(/*response*/);
        }

        [HttpPut()]
        public async Task<IActionResult> Update(UserDto userDto)
        {
            var userModel = Mapper.Map<User>(userDto);
            await userRepository.UpdateAsync(userModel);
            return Ok();
        }

        [HttpGet("{userId}")]
        public UserDto Get(int userId)
        {
            var user = userRepository.Get(userId);
            return Mapper.Map<UserDto>(user);
        }

        [HttpGet()]
        public List<UserDto> GetAll()
        {
            var users = userRepository.GetAll();
            return Mapper.Map<List<UserDto>>(users);
        }

        [HttpDelete()]
        public async Task<IActionResult> Delete(int userId)
        {
            await userRepository.DeleteAsync(userId);
            return Ok();
        }
    }
}

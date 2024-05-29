using AutoMapper;
using Hu.API.Dtos;
using Hu.API.EFModels;

namespace Hu.API
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            registerDtoMappings();
        }

        private void registerDtoMappings()
        {
            CreateMap<UserDto, User>().ReverseMap();
        }
    }
}

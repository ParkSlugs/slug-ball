using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Hu.API.Controllers
{
    [ApiController]
    public class HuControllerBase<T> : ControllerBase where T : HuControllerBase<T>
    {
        private IMapper? _mapper;

        protected IMapper Mapper => _mapper ??= HttpContext?.RequestServices.GetService<IMapper>();


    }
}

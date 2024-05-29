using Hu.API.Enums;

namespace Hu.API.EFModels
{
    public class User
    {
        public int? Id { get; set; }
        public required string UserName { get; set; }
        public required string Email { get; set; }
        public string? FirstName { get; set; }
        public string? Surname { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public GenderEnum? Gender { get; set; }
        public string? MumsName { get; set; }
        public required string Password { get; set; }
    }
}

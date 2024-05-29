using Hu.API.Enums;
using System.Runtime.Serialization;

namespace Hu.API.Dtos
{
    public class UserDto
    {
        [DataMember(Name = "id")]
        public int? Id { get; set; }

        [DataMember(Name = "userName")]
        public required string UserName { get; set; }

        [DataMember(Name = "email")]
        public required string Email { get; set; }

        [DataMember(Name = "firstName")]
        public string? FirstName { get; set; }

        [DataMember(Name = "surname")]
        public string? Surname { get; set; }

        [DataMember(Name = "dateOfBirth")]
        public DateTime? DateOfBirth { get; set; }

        [DataMember(Name = "gender")]
        public GenderEnum? Gender { get; set; }

        [DataMember(Name = "mumsName")]
        public string? MumsName { get; set; }

        [DataMember(Name = "password")]
        public required string Password { get; set; }
    }
}

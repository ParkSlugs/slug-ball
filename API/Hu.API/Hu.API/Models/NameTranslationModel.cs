using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class NameTranslationModel
    {
        [JsonProperty("ar")]
        public string? Ar { get; set; }
    }
}

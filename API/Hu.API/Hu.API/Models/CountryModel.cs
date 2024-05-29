using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class CountryModel
    {
        [JsonProperty("alpha2")]
        public string? Alpha2 { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }
    }
}

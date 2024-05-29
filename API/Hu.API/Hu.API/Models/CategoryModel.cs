using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class CategoryModel
    {
        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("slug")]
        public string? Slug { get; set; }

        [JsonProperty("sport")]
        public SportModel? Sport { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("country")]
        public CountryModel? Country { get; set; }

        [JsonProperty("flag")]
        public string? Flag { get; set; }

        [JsonProperty("alpha2")]
        public string Alpha2 { get; set; } = string.Empty;
    }
}

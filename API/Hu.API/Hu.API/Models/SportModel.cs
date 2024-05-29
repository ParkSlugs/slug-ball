using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class SportModel
    {
        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("slug")]
        public string? Slug { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }
    }
}

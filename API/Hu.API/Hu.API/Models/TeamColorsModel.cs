using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class TeamColorsModel
    {
        [JsonProperty("primary")]
        public string? Primary { get; set; }

        [JsonProperty("secondary")]
        public string? Secondary { get; set; }

        [JsonProperty("text")]
        public string? Text { get; set; }
    }
}

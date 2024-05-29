using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class StatusModel
    {
        [JsonProperty("code")]
        public int Code { get; set; }

        [JsonProperty("description")]
        public string? Description { get; set; }

        [JsonProperty("type")]
        public string? Type { get; set; }
    }
}

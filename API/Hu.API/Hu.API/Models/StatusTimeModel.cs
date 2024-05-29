using Newtonsoft.Json;
namespace Hu.API.Models
{
    public class StatusTimeModel
    {
        [JsonProperty("prefix")]
        public string? Prefix { get; set; }

        [JsonProperty("initial")]
        public int Initial { get; set; }

        [JsonProperty("max")]
        public int Max { get; set; }

        [JsonProperty("timestamp")]
        public int Timestamp { get; set; }

        [JsonProperty("extra")]
        public int Extra { get; set; }
    }
}

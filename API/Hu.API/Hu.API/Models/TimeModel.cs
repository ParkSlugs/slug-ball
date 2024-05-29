using Newtonsoft.Json;
namespace Hu.API.Models
{
    public class TimeModel
    {
        [JsonProperty("injuryTime1")]
        public int InjuryTime1 { get; set; }

        [JsonProperty("initial")]
        public int Initial { get; set; }

        [JsonProperty("max")]
        public int Max { get; set; }

        [JsonProperty("extra")]
        public int Extra { get; set; }

        [JsonProperty("currentPeriodStartTimestamp")]
        public int CurrentPeriodStartTimestamp { get; set; }
    }
}

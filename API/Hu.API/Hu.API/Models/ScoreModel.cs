using Newtonsoft.Json;
namespace Hu.API.Models
{
    public class ScoreModel
    {
        [JsonProperty("current")]
        public int Current { get; set; }

        [JsonProperty("display")]
        public int Display { get; set; }

        [JsonProperty("period1")]
        public int Period1 { get; set; }

        [JsonProperty("period2")]
        public int Period2 { get; set; }

        [JsonProperty("normaltime")]
        public int Normaltime { get; set; }
    }
}

using Newtonsoft.Json;
namespace Hu.API.Models
{
    public class RoundInfoModel
    {
        [JsonProperty("round")]
        public int Round { get; set; }
    }
}

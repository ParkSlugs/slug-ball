using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class ChangesModel
    {
        [JsonProperty("changes")]
        public List<string>? Changes { get; set; }

        [JsonProperty("changeTimestamp")]
        public int ChangeTimestamp { get; set; }
    }
}

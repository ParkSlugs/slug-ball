using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class LiveResponse
    {
        [JsonProperty("events")]
        public List<EventModel>? Events { get; set; }
    }
}

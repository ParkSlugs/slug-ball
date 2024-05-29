using Newtonsoft.Json;
namespace Hu.API.Models
{
    public class SeasonModel
    {
        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("year")]
        public string? Year { get; set; }

        [JsonProperty("editor")]
        public bool Editor { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }
    }
}

using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class TournamentModel
    {
        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("slug")]
        public string? Slug { get; set; }

        [JsonProperty("category")]
        public CategoryModel Category { get; set; } = new CategoryModel();

        [JsonProperty("uniqueTournament")]
        public UniqueTournamentModel UniqueTournament { get; set; } = new UniqueTournamentModel();

        [JsonProperty("priority")]
        public int Priority { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }
    }
}

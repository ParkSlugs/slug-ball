using Newtonsoft.Json;
using static Hu.API.Models.LiveResponse;

namespace Hu.API.Models
{
    public class UniqueTournamentModel
    {
        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("slug")]
        public string? Slug { get; set; }

        [JsonProperty("primaryColorHex")]
        public string? PrimaryColorHex { get; set; }

        [JsonProperty("secondaryColorHex")]
        public string? SecondaryColorHex { get; set; }

        [JsonProperty("category")]
        public CategoryModel? Category { get; set; }

        [JsonProperty("userCount")]
        public int UserCount { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("country")]
        public CountryModel? Country { get; set; }

        [JsonProperty("hasEventPlayerStatistics")]
        public bool HasEventPlayerStatistics { get; set; }

        [JsonProperty("crowdsourcingEnabled")]
        public bool CrowdsourcingEnabled { get; set; }

        [JsonProperty("hasPerformanceGraphFeature")]
        public bool HasPerformanceGraphFeature { get; set; }

        [JsonProperty("displayInverseHomeAwayTeams")]
        public bool DisplayInverseHomeAwayTeams { get; set; }
    }
}

using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class TeamModel
    {
        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("slug")]
        public string? Slug { get; set; }

        [JsonProperty("shortName")]
        public string? ShortName { get; set; }

        [JsonProperty("gender")]
        public string? Gender { get; set; }

        [JsonProperty("sport")]
        public SportModel? Sport { get; set; }

        [JsonProperty("userCount")]
        public int UserCount { get; set; }

        [JsonProperty("nameCode")]
        public string? NameCode { get; set; }

        [JsonProperty("disabled")]
        public bool Disabled { get; set; }

        [JsonProperty("national")]
        public bool National { get; set; }

        [JsonProperty("type")]
        public int Type { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("country")]
        public CountryModel? Country { get; set; }

        [JsonProperty("subTeams")]
        public List<object>? SubTeams { get; set; }

        [JsonProperty("teamColors")]
        public TeamColorsModel? TeamColors { get; set; }

        [JsonProperty("fieldTranslations")]
        public FieldTranslationsModel? FieldTranslations { get; set; }
    }
}

using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class EventModel
    {

        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("tournament")]
        public TournamentModel Tournament { get; set; } = new TournamentModel();

        [JsonProperty("season")]
        public SeasonModel Season { get; set; } = new SeasonModel();

        [JsonProperty("roundInfo")]
        public RoundInfoModel RoundInfo { get; set; } = new RoundInfoModel();

        [JsonProperty("customId")]
        public string? CustomId { get; set; }

        [JsonProperty("status")]
        public StatusModel Status { get; set; } = new StatusModel();

        [JsonProperty("homeTeam")]
        public TeamModel HomeTeam { get; set; } = new TeamModel();

        [JsonProperty("awayTeam")]
        public TeamModel AwayTeam { get; set; } = new TeamModel();

        [JsonProperty("homeScore")]
        public ScoreModel HomeScore { get; set; } = new ScoreModel();

        [JsonProperty("awayScore")]
        public ScoreModel AwayScore { get; set; } = new ScoreModel();

        [JsonProperty("time")]
        public TimeModel Time { get; set; } = new TimeModel();

        [JsonProperty("changes")]
        public ChangesModel Changes { get; set; } = new ChangesModel();

        [JsonProperty("hasGlobalHighlights")]
        public bool HasGlobalHighlights { get; set; }

        [JsonProperty("hasEventPlayerStatistics")]
        public bool HasEventPlayerStatistics { get; set; }

        [JsonProperty("hasEventPlayerHeatMap")]
        public bool HasEventPlayerHeatMap { get; set; }

        [JsonProperty("detailId")]
        public int DetailId { get; set; }

        [JsonProperty("crowdsourcingDataDisplayEnabled")]
        public bool CrowdsourcingDataDisplayEnabled { get; set; }

        [JsonProperty("statusTime")]
        public StatusTimeModel StatusTime { get; set; } = new StatusTimeModel();

        [JsonProperty("crowdsourcingEnabled")]
        public bool CrowdsourcingEnabled { get; set; }

        [JsonProperty("startTimestamp")]
        public int StartTimestamp { get; set; }

        [JsonProperty("slug")]
        public string? Slug { get; set; }

        [JsonProperty("lastPeriod")]
        public string? LastPeriod { get; set; }

        [JsonProperty("finalResultOnly")]
        public bool FinalResultOnly { get; set; }

        [JsonProperty("isEditor")]
        public bool IsEditor { get; set; }

        [JsonProperty("coverage")]
        public int? Coverage { get; set; }

        [JsonProperty("homeRedCards")]
        public int? HomeRedCards { get; set; }

        [JsonProperty("awayRedCards")]
        public int? AwayRedCards { get; set; }
    }
}

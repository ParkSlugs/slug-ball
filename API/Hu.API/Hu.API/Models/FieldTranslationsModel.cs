using Newtonsoft.Json;

namespace Hu.API.Models
{
    public class FieldTranslationsModel
    {
        [JsonProperty("nameTranslation")]
        public NameTranslationModel? NameTranslation { get; set; }

        [JsonProperty("shortNameTranslation")]
        public ShortNameTranslationModel? ShortNameTranslation { get; set; }
    }
}

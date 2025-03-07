using System.Text.Json.Serialization;

namespace Blazor.Data
{

    public class Character
    {
        [JsonPropertyName("name")]
        public string Name { get; set;} = "";

        [JsonPropertyName("height")]
        public string HeightCm {get; set;} = "";

        [JsonPropertyName("mass")]
        public string MassKg {get; set;} = "";

        [JsonPropertyName("birth_year")]
        public string BirthYear { get; set;} = "";

    }
}
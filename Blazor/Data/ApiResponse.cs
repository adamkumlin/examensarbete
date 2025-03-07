using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace Blazor.Data
{

    public class ApiResponse
    {
        [JsonProperty("results")]
        public List<Character> Results {get; set;} = [];

    }
}
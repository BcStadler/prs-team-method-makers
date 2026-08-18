using System.Text.Json.Serialization;

namespace Prs.Api.Models;

public class RequestLine {

    public int Id { get; set; } = 0;
    public int Quantity { get; set; } = 1;

    public int RequestId { get; set; } = 0;
    [JsonIgnore]
    public Request? Request { get; set; } = null;

    public int ProductId { get; set; } = 0;
    public Product? Product { get; set; } = null;

}

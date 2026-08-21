using System.ComponentModel.DataAnnotations;

namespace Prs.Api.Models;

public class Comment {

    public int Id { get; set; } = 0;
    [Required]
    [StringLength(500)]
    public string Body { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public int RequestId { get; set; } = 0;
    public Request? Request { get; set; } = null;

    public int UserId { get; set; } = 0;
    public User? User { get; set; } = null;

}

using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Prs.Api.Models;

[Index("Username", IsUnique = true)]
public class User {

    public int Id { get; set; } = 0;
    [StringLength(30)]
    public string Username { get; set; } = string.Empty;
    [StringLength(60)]
    public string Password { get; set; } = string.Empty;
    [StringLength(30)]
    public string FirstName { get; set; } = string.Empty;
    [StringLength(30)]
    public string LastName { get; set; } = string.Empty;
    [StringLength(12)]
    public string? Phone { get; set; } = null;
    [StringLength(255)]
    public string? Email { get; set; } = null;
    public bool IsReviewer { get; set; } = false;
    public bool IsAdmin { get; set; } = false;

}

using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prs.Api.Models;

[Index("PartNumber", IsUnique = true)]
public class Product {

    public int Id { get; set; } = 0;
    [StringLength(30)]
    public string PartNumber { get; set; } = string.Empty;
    [StringLength(30)]
    public string Name { get; set; } = string.Empty;
    [Column(TypeName = "decimal(11,2)")]
    public decimal Price { get; set; } = decimal.Zero;
    [StringLength(30)]
    public string Unit { get; set; } = "Each";
    [StringLength(255)]
    public string? PhotoPath { get; set; } = null;

    public int VendorId { get; set; } = 0;
    public Vendor? Vendor { get; set; } = null;

}

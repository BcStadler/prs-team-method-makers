using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Prs.Api.Data;
using Prs.Api.Models;

namespace Prs.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class VendorsController : ControllerBase {
        private readonly PrsDbContext _db;

        public VendorsController(PrsDbContext db) {
            _db = db;
        }

        // GET: api/Vendors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vendor>>> GetAll() {
            return await _db.Vendors.ToListAsync();
        }

        // GET: api/Vendors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vendor>> GetById(int id) {
            var vendor = await _db.Vendors
                .Include(vendor => vendor.Products)
                .FirstOrDefaultAsync(vendor => vendor.Id == id);

            if (vendor == null) {
                return NotFound();
            }

            foreach (var product in vendor.Products) {
                product.Vendor = null;
            }

            return vendor;
        }

        // POST: api/Vendors
        [HttpPost]
        public async Task<ActionResult<Vendor>> Create(Vendor newVendor) {
            _db.Vendors.Add(newVendor);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = newVendor.Id }, newVendor);
        }

        // PUT: api/Vendors/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Vendor>> Update(int id, Vendor updatedVendor) {
            if (id != updatedVendor.Id) {
                return BadRequest();
            }

            var currentVendor = await _db.Vendors.FindAsync(id);
            if (currentVendor == null) {
                return NotFound();
            }

            _db.Entry(currentVendor).CurrentValues.SetValues(updatedVendor);

            return Ok(currentVendor);
        }

        // DELETE: api/Vendors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var vendor = await _db.Vendors.FindAsync(id);
            if (vendor == null) {
                return NotFound();
            }

            _db.Vendors.Remove(vendor);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}

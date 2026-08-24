using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Prs.Api.Data;
using Prs.Api.Models;

namespace Prs.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase {
        private readonly PrsDbContext _db;

        public ProductsController(PrsDbContext db) {
            _db = db;
        }

        // GET: api/Products
        // GET: api/Products?vendorId=3
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAll([FromQuery] int? vendorId = null) {
            var query = _db.Products
                           .Include(product => product.Vendor)
                           .AsQueryable();

            if (vendorId != null) {
                query = query.Where(product => product.VendorId == vendorId);
            }

            return await query.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetById(int id) {
            var product = await _db.Products
                                   .Include(product => product.Vendor)
                                   .SingleOrDefaultAsync(product => product.Id == id);

            if (product == null) {
                return NotFound();
            }

            return product;
        }

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<Product>> Create(Product newProduct) {
            _db.Products.Add(newProduct);
            await _db.SaveChangesAsync();

            var productWithVendor = await _db.Products
                                             .Include(product => product.Vendor)
                                             .SingleOrDefaultAsync(product => product.Id == newProduct.Id);

            return CreatedAtAction(nameof(GetById), new { id = newProduct.Id }, productWithVendor);
        }

        // PUT: api/Products/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> Update(int id, Product updatedProduct) {
            if (id != updatedProduct.Id) {
                return BadRequest();
            }

            var currentProduct = await _db.Products.FindAsync(id);
            if (currentProduct == null) {
                return NotFound();
            }

            _db.Entry(currentProduct).CurrentValues.SetValues(updatedProduct);
            await _db.SaveChangesAsync();

            var productWithVendor = await _db.Products
                                             .Include(product => product.Vendor)
                                             .SingleOrDefaultAsync(product => product.Id == id);

            return Ok(productWithVendor);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var product = await _db.Products.FindAsync(id);
            if (product == null) {
                return NotFound();
            }

            _db.Products.Remove(product);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}

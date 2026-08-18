using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Prs.Api.Data;
using Prs.Api.Models;

namespace Prs.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RequestLinesController : ControllerBase {
        private readonly PrsDbContext _db;

        public RequestLinesController(PrsDbContext db) {
            _db = db;
        }

        private async Task RecalculateRequestTotal(int requestId) {
            var request = await _db.Requests.FindAsync(requestId);
            request!.Total = await _db.RequestLines
                                      .Where(rl => rl.RequestId == requestId)
                                      .SumAsync(rl => rl.Quantity * rl.Product!.Price);
            await _db.SaveChangesAsync();
        }

        // GET: api/RequestLines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RequestLine>>> GetAll() {
            return await _db.RequestLines
                            .Include(requestline => requestline.Product)
                            .ToListAsync();
        }

        // GET: api/RequestLines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RequestLine>> GetById(int id) {
            var requestline = await _db.RequestLines
                                       .Include(requestline => requestline.Product)
                                       .SingleOrDefaultAsync(requestline => requestline.Id == id);

            if (requestline == null) {
                return NotFound();
            }

            return requestline;
        }

        // POST: api/RequestLines
        [HttpPost]
        public async Task<ActionResult<RequestLine>> Create(RequestLine newRequestLine) {
            _db.RequestLines.Add(newRequestLine);
            await _db.SaveChangesAsync();
            await RecalculateRequestTotal(newRequestLine.RequestId);

            var requestlineWithProduct = await _db.RequestLines
                                                  .Include(rl => rl.Product)
                                                  .SingleOrDefaultAsync(rl => rl.Id == newRequestLine.Id);

            return CreatedAtAction(nameof(GetById), new { id = newRequestLine.Id }, requestlineWithProduct);
        }

        // PUT: api/RequestLines/5
        [HttpPut("{id}")]
        public async Task<ActionResult<RequestLine>> Update(int id, RequestLine updatedRequestLine) {
            if (id != updatedRequestLine.Id) {
                return BadRequest();
            }

            var currentRequestLine = await _db.RequestLines.FindAsync(id);
            if (currentRequestLine == null) {
                return NotFound();
            }

            _db.Entry(currentRequestLine).CurrentValues.SetValues(updatedRequestLine);
            await _db.SaveChangesAsync();
            await RecalculateRequestTotal(updatedRequestLine.RequestId);

            var requestlineWithProduct = await _db.RequestLines
                                                  .Include(rl => rl.Product)
                                                  .SingleOrDefaultAsync(rl => rl.Id == id);

            return Ok(requestlineWithProduct);
        }

        // DELETE: api/RequestLines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var requestline = await _db.RequestLines.FindAsync(id);
            if (requestline == null) {
                return NotFound();
            }

            _db.RequestLines.Remove(requestline);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}

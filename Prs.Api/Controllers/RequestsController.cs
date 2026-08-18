using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Prs.Api.Data;
using Prs.Api.Models;

namespace Prs.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsController : ControllerBase {
        private readonly PrsDbContext _db;

        public RequestsController(PrsDbContext db) {
            _db = db;
        }

        // GET: api/Requests
        // GET: api/Requests?status=NEW
        // GET: api/Requests?status=REVIEW
        // GET: api/Requests?status=APPROVED
        // GET: api/Requests?status=REJECTED
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Request>>> GetAll([FromQuery] string? status = null) {
            var query = _db.Requests
                           .Include(request => request.User)
                           .AsQueryable();

            if (status != null) {
                query = query.Where(request => request.Status != status);
            }

            return await query.ToListAsync();
        }

        // GET: api/Requests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Request>> GetById(int id) {
            var request = await _db.Requests
                                   .Include(request => request.User)
                                   .Include(request => request.RequestLines)
                                       .ThenInclude(requestline => requestline.Product)
                                   .SingleOrDefaultAsync(request => request.Id == id);

            if (request == null) {
                return NotFound();
            }

            return request;
        }

        // POST: api/Requests
        [HttpPost]
        public async Task<ActionResult<Request>> Create(Request newRequest) {
            _db.Requests.Add(newRequest);
            await _db.SaveChangesAsync();

            var requestWithUser = await _db.Requests
                                           .Include(request => request.User)
                                           .SingleOrDefaultAsync(request => request.Id == newRequest.Id);

            return CreatedAtAction(nameof(GetById), new { id = newRequest.Id }, requestWithUser);
        }

        // PUT: api/Requests/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Request>> Update(int id, Request updatedRequest) {
            if (id != updatedRequest.Id) {
                return BadRequest();
            }

            var currentRequest = await _db.Requests.FindAsync(id);
            if (currentRequest == null) {
                return NotFound();
            }

            _db.Entry(currentRequest).CurrentValues.SetValues(updatedRequest);
            await _db.SaveChangesAsync();

            var requestWithUser = await _db.Requests
                                           .Include(request => request.User)
                                           .SingleOrDefaultAsync(request => request.Id == id);

            return Ok(requestWithUser);
        }

        // PUT: api/Requests/5/review
        [HttpPut("{id}/review")]
        public async Task<ActionResult<Request>> Review(int id) {
            var currentRequest = await _db.Requests.FindAsync(id);
            if (currentRequest == null) {
                return NotFound();
            }

            currentRequest.Status = (currentRequest.Total < 50)
                ? RequestStatus.Approved
                : RequestStatus.Review;
            currentRequest.RejectionReason = null;
            await _db.SaveChangesAsync();

            return Ok(currentRequest);
        }

        // PUT: api/Requests/5/approve
        [HttpPut("{id}/approve")]
        public async Task<ActionResult<Request>> Approve(int id) {
            var currentRequest = await _db.Requests.FindAsync(id);
            if (currentRequest == null) {
                return NotFound();
            }

            currentRequest.Status = RequestStatus.Approved;
            currentRequest.RejectionReason = null;
            await _db.SaveChangesAsync();

            return Ok(currentRequest);
        }

        // PUT: api/Requests/5/reject
        [HttpPut("{id}/reject")]
        public async Task<ActionResult<Request>> Reject(int id, [FromBody] string rejectionReason) {
            var currentRequest = await _db.Requests.FindAsync(id);
            if (currentRequest == null) {
                return NotFound();
            }

            currentRequest.Status = RequestStatus.Rejected;
            currentRequest.RejectionReason = rejectionReason;
            await _db.SaveChangesAsync();

            return Ok(currentRequest);
        }

        // DELETE: api/Requests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var request = await _db.Requests.FindAsync(id);
            if (request == null) {
                return NotFound();
            }

            _db.Requests.Remove(request);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}

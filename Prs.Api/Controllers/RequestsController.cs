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
        // GET: api/Requests?userId=5&excludeUserId=3&search=office&sortBy=total&sortDirection=desc
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Request>>> GetAll(
            [FromQuery] string? status = null,
            [FromQuery] int? userId = null,
            [FromQuery] int? excludeUserId = null,
            [FromQuery] string? search = null,
            [FromQuery] string? sortBy = null,
            [FromQuery] string? sortDirection = null) {
            var query = _db.Requests
                           .Include(request => request.User)
                           .AsQueryable();

            if (status != null) {
                query = query.Where(request => request.Status == status);
            }

            if (excludeUserId != null) {
                query = query.Where(request => request.UserId != excludeUserId);
            } else if (userId != null) {
                query = query.Where(request => request.UserId == userId);
            }

            if (!string.IsNullOrWhiteSpace(search)) {
                query = query.Where(request => request.Description.Contains(search) ||
                                               request.Justification.Contains(search));
            }

            switch (sortBy?.ToLowerInvariant()) {
                case "total" when sortDirection?.ToLowerInvariant() == "desc":
                    query = query.OrderByDescending(request => request.Total);
                    break;
                case "total":
                    query = query.OrderBy(request => request.Total);
                    break;
                case "status" when sortDirection?.ToLowerInvariant() == "desc":
                    query = query.OrderByDescending(request => request.Status);
                    break;
                case "status":
                    query = query.OrderBy(request => request.Status);
                    break;
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

        // POST: api/Requests/5/duplicate
        [HttpPost("{id}/duplicate")]
        public async Task<ActionResult<Request>> Duplicate(int id, [FromBody] int userId) {
            var originalRequest = await _db.Requests
                                           .Include(request => request.RequestLines)
                                               .ThenInclude(requestLine => requestLine.Product)
                                           .SingleOrDefaultAsync(request => request.Id == id);

            if (originalRequest == null) {
                return NotFound();
            }

            var newRequest = new Request {
                Description = $"Copy of {originalRequest.Description}",
                Justification = originalRequest.Justification,
                DeliveryMode = originalRequest.DeliveryMode,
                Status = RequestStatus.New,
                UserId = userId,
                RequestLines = originalRequest.RequestLines.Select(requestLine => new RequestLine {
                    ProductId = requestLine.ProductId,
                    Quantity = requestLine.Quantity,
                }).ToList(),
            };
            newRequest.Total = originalRequest.RequestLines.Sum(requestLine =>
                requestLine.Quantity * requestLine.Product!.Price);

            _db.Requests.Add(newRequest);
            await _db.SaveChangesAsync();

            var requestWithDetails = await _db.Requests
                                              .Include(request => request.User)
                                              .Include(request => request.RequestLines)
                                                  .ThenInclude(requestLine => requestLine.Product)
                                              .SingleAsync(request => request.Id == newRequest.Id);

            return CreatedAtAction(nameof(GetById), new { id = newRequest.Id }, requestWithDetails);
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

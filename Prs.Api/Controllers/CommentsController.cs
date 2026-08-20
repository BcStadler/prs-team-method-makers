using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Prs.Api.Data;
using Prs.Api.Models;

namespace Prs.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase {
        private readonly PrsDbContext _db;

        public CommentsController(PrsDbContext db) {
            _db = db;
        }

        // GET: api/Comments?requestId=5
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comment>>> GetAll([FromQuery] int? requestId = null) {
            var query = _db.Comments
                           .Include(comment => comment.User)
                           .AsQueryable();

            if (requestId != null) {
                query = query.Where(comment => comment.RequestId == requestId);
            }

            return await query.OrderBy(comment => comment.CreatedAt).ToListAsync();
        }

        // GET: api/Comments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Comment>> GetById(int id) {
            var comment = await _db.Comments
                                   .Include(comment => comment.User)
                                   .SingleOrDefaultAsync(comment => comment.Id == id);

            if (comment == null) {
                return NotFound();
            }

            return comment;
        }

        // POST: api/Comments
        [HttpPost]
        public async Task<ActionResult<Comment>> Create(Comment newComment) {
            _db.Comments.Add(newComment);
            await _db.SaveChangesAsync();

            var commentWithUser = await _db.Comments
                                           .Include(comment => comment.User)
                                           .SingleOrDefaultAsync(comment => comment.Id == newComment.Id);

            return CreatedAtAction(nameof(GetById), new { id = newComment.Id }, commentWithUser);
        }

        // DELETE: api/Comments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var comment = await _db.Comments.FindAsync(id);
            if (comment == null) {
                return NotFound();
            }

            _db.Comments.Remove(comment);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}

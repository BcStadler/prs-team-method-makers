using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Prs.Api.Data;
using Prs.Api.Models;

namespace Prs.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase {
        private readonly PrsDbContext _db;

        public UsersController(PrsDbContext db) {
            _db = db;
        }

        // POST: api/Users/login
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(User credentials) {
            var user = await _db.Users
                                .SingleOrDefaultAsync(user => user.Username == credentials.Username);

            if (user == null || !BCrypt.Net.BCrypt.Verify(credentials.Password, user.Password)) {
                return NotFound();
            }

            return user;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAll() {
            return await _db.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(int id) {
            var user = await _db.Users.FindAsync(id);

            if (user == null) {
                return NotFound();
            }

            return user;
        }

        // POST: api/Users
        [HttpPost]
        public async Task<ActionResult<User>> Create(User newUser) {
            _db.Users.Add(newUser);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = newUser.Id }, newUser);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<ActionResult<User>> Update(int id, User updatedUser) {
            if (id != updatedUser.Id) {
                return BadRequest();
            }

            var currentUser = await _db.Users.FindAsync(id);
            if (currentUser == null) {
                return NotFound();
            }

            updatedUser.Password = BCrypt.Net.BCrypt.HashPassword(updatedUser.Password);

            _db.Entry(currentUser).CurrentValues.SetValues(updatedUser);
            await _db.SaveChangesAsync();

            return Ok(currentUser);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var user = await _db.Users.FindAsync(id);
            if (user == null) {
                return NotFound();
            }

            _db.Users.Remove(user);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}

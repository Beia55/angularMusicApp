using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularMusicApp.Data;
using AngularMusicApp.Models;

namespace AngularMusicApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : ControllerBase
    {
        private readonly AngularMusicAppContext _context;

        public SongsController(AngularMusicAppContext context)
        {
            _context = context;
        }

        // GET: api/Songs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Song>>> GetSong()
        {
            return await _context.Song.ToListAsync();
        }

        // PUT: api/Songs/5
        [HttpPut("{id}")]
        public async Task PutSong(Guid id, [FromBody] Song song)
        {
            if (id == song.ID)
            {
                _context.Entry(song).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
        }

        // POST: api/Songs
        [HttpPost]
        public async Task PostSong([FromBody] Song song)
        {
            if (song.ID == Guid.Empty) {
                song.ID = Guid.NewGuid();
            }

            _context.Song.Add(song);
            await _context.SaveChangesAsync();
        }

        // DELETE: api/Songs/5
        [HttpDelete("{id}")]
        public async Task DeleteSong(Guid id)
        {
            Song song = await _context.Song.FindAsync(id);
            if (song != null)
            {
                _context.Song.Remove(song);
                await _context.SaveChangesAsync();
            }
        }

        private bool SongExists(Guid id)
        {
            return _context.Song.Any(e => e.ID == id);
        }
    }
}

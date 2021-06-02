using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AngularMusicApp.Data
{
    public class AngularMusicAppContext : IdentityDbContext
    {
        public DbSet<AngularMusicApp.Models.Song> Song { get; set; }

        public AngularMusicAppContext (DbContextOptions<AngularMusicAppContext> options)
            : base(options)
        {   }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Models.Song>().HasData(new Models.Song() { ID = new Guid("551E9DAB-B73E-4322-8200-BFAB4A214D9F"), Name = "I'll Live in Glory", Year = 2007, Composer = "Whisnants" });
            modelBuilder.Entity<Models.Song>().HasData(new Models.Song() { ID = new Guid("D20287C1-F990-46D2-9698-6897F81E23E0"), Name = "East to West", Year = 2010, Composer = "Casting Crowns" });
            modelBuilder.Entity<Models.Song>().HasData(new Models.Song() { ID = new Guid("5DCCA768-86E0-4745-A93D-9F2E268A75C1"), Name = "What Faith Can Do", Year = 2009, Composer = "Kutless" });
        }

    }
}

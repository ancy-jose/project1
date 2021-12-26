using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace HotelBookingApi.Models
{
    public class HotelBookingContext:DbContext
    {
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<Booking> Booking { get; set; }
        public DbSet<Guest> Guest { get; set; }

        public HotelBookingContext(DbContextOptions<HotelBookingContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hotel>().ToTable("Hotel");
            modelBuilder.Entity<Room>().ToTable("Room");
            modelBuilder.Entity<Booking>().ToTable("Booking");
            modelBuilder.Entity<Guest>().ToTable("Guest");
        }
    }
}


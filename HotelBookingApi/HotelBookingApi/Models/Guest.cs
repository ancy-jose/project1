using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HotelBookingApi.Models
{
    public class Guest
    {
        [Key]
        public string Guest_Id { get; set; }
        public int Booking_Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone_num { get; set; }
    }
}

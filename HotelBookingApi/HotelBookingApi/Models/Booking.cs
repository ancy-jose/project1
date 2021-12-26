using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HotelBookingApi.Models
{
    public class Booking
    {

        [Key]
        public int Booking_Id { get; set; }
        public string Hotel_Id { get; set; }
        public int Room_num { get; set; }
        public DateTime Booking_date { get; set; }
    }
}

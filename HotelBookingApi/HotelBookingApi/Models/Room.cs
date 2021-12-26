using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HotelBookingApi.Models
{
    public class Room
    {
       
            [Key]
            public int Room_num { get; set; }
            public string Hotel_Id { get; set; }
            public string Room_type { get; set; }
            public string Room_view { get; set; }
            public int Price { get; set; }
            public int Occupancy { get; set; }

    }
}

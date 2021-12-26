using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace HotelBookingApi.Models
{
    public class Hotel
    {       [Key]
            public string Hotel_Id { get; set; }
            public string Hotel_name { get; set; }
            public string Location { get; set; }
            public string Phone_num { get; set; }
            public Double Rating { get; set; }
        
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlingHttp.Models
{
    public class GuestbookEntry
    {
        public int Id { get; set; }

        public string Author { get; set; }

        public string Message { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
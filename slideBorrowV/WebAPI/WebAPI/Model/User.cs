using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class User
    {
        public string Id { get; set; }
        public string Userborrow { get; set; }
        public string Witness { get; set; }
        public Slotitem Slot { get; set; }
        public DateTime Dateborrowitem { get; set; }
        public DateTime Datebackitem { get; set; }
        public bool Checkborrowitem { get; set; }
        // checkคน  ตอนคืน

    }
}

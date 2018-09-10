using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class History
    {
        public string Id { get; set; }
        public string Borrowname { get; set; }
        public string SlotName { get; set; }
        // ชื่อคนคืนกับพยาน
        public string SlotId { get; set; }
        public string WitnessName { get; set; }
        public IEnumerable<Insertitem> Item { get; set; }
        public DateTime? Dateborrowitem { get; set; }
        public DateTime? Datebackitem { get; set; }
        // checkคน  ตอนคืน

    }
}

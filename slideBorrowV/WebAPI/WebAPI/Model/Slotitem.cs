using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class Slotitem
    {
        public string Id { get; set; }
        public string Slotname { get; set; }
        public IEnumerable<Insertitem> Item { get; set; }
    }
}

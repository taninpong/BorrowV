using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class Insertitem
    {
        public string Id { get; set; }
        public string Nameitem { get; set; }
        public int quantity { get; set; }
        public int total { get; set; }
    }
    
}

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using WebApi.Model;
using System.Linq;


namespace WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    public class GetUserController : Controller
    {
        MongoClient db;
        IMongoCollection<History> Collection;
        IMongoCollection<Slotitem> SlotCollection;
        public GetUserController()
        {
            db = new MongoClient("mongodb://borrowv:abcd1234@ds243502.mlab.com:43502/borrowv");
            var test = db.GetDatabase("borrowv");
            Collection = test.GetCollection<History>("history");
            SlotCollection = test.GetCollection<Slotitem>("Locker");

        }


        // GET api/values
        [HttpGet]
        public IEnumerable<History> ShowBorrow(string username)
        {
            var data = Collection.Find(x => (x.Borrowname == username || x.WitnessName == username)
                && x.Dateborrowitem != null && x.Datebackitem == null
                ).ToList();
            return data;
        }


        [HttpPost("{username}")]
        public History BorrowItem([FromBody]Slotitem model, string username)
        {
            var history = new History()
            {
                Id = Guid.NewGuid().ToString(),
                Borrowname = username,
                SlotName = model.Slotname,
                Item = model.Item,
                SlotId = model.Id
            };
            Collection.InsertOne(history);
            return history;
        }

        [HttpPost("{id}/{witnessname}")]
        public bool ConfirmBorrow(string id, string witnessname)
        {
            try
            {

                var history = Collection.Find(x => x.Id == id).FirstOrDefault();
                if(history.Borrowname == witnessname)
                {
                    return false;
                }
                
                history.WitnessName = witnessname;
                history.Dateborrowitem = DateTime.UtcNow;
                Collection.ReplaceOne(it => it.Id == id, history);
                var slot = SlotCollection.Find(x => x.Id == history.SlotId).FirstOrDefault();
                foreach (var item in history.Item)
                {
                    var updated = slot.Item.FirstOrDefault(i => i.Id == item.Id);
                    updated.quantity -= item.quantity;
                }
                SlotCollection.ReplaceOne(it => it.Id == slot.Id, slot);

                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }

        //[HttpGet]
        //public IEnumerable<History> ShowBorrow()
        //{
        //    var data = Collection.Find(x => true).ToList();
        //    return data;
        //}




    }
}

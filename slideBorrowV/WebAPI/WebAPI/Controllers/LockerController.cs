using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using WebApi.Model;

namespace WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    public class LockerController : Controller
    {
        MongoClient db;
        IMongoCollection<Slotitem> Collection;
        //IMongoCollection<Insertitem> ItemCollection;
        public LockerController()
        {
            db = new MongoClient("mongodb://borrowv:abcd1234@ds243502.mlab.com:43502/borrowv");
            var test = db.GetDatabase("borrowv");
            Collection = test.GetCollection<Slotitem>("Locker");
            //ItemCollection = test.GetCollection<Insertitem>("insertitem");
        }


        // GET api/values
        [HttpGet]
        public IEnumerable<Slotitem> ListLocker()
        {
            var data = Collection.Find(x => true).ToList();
            return data;
        }

        [HttpPost]
        public bool Createlocker([FromBody]Slotitem model)
        {
            //var data = new Insertitem
            //{
            //    Id = "5",
            //    Nameitem = "water",
            //    quantity = 6
            //};
            model.Id = Guid.NewGuid().ToString();
            model.Item = new List<Insertitem>();
            //if(model.Item == null)
            //{
            //    var checknull = model.Item?.ToList() ?? new List<Insertitem>();
            //    checknull.Add(model.item);
            //    model.Item = checknull;
            //    Collection.ReplaceOne(x => x.Id == id, data);
            //    return checknull;
            //}
            //model.Item?.ToString() ?? new List<Insertitem>();
            Collection.InsertOne(model);
            return true;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Slotitem Listiteminlocker(string id)
        {
            //xxx.Item = Collection.Find(x => x.Id == x.Id.ToString()).FirstOrDefault();
            //var xxx = Collection.Find(x => x.Item.ToList(Slotitem));
            var data = Collection.Find(x => x.Id == id).FirstOrDefault();
            return data;
        }

        [HttpPost]
        public bool AddItemToLocker([FromBody]Insertitem require, string id)
        {
            var data = Collection.Find(x => x.Id == id).FirstOrDefault();
            if (data == null)
            {
                return false;
            }
            try
            {
                var item = new Insertitem
                {
                    Id = Guid.NewGuid().ToString(),
                    Nameitem = require.Nameitem,
                    quantity = require.quantity,
                    total = require.quantity
                };
                var newiem = data.Item?.ToList() ?? new List<Insertitem>();
                newiem.Add(item);
                data.Item = newiem;
                Collection.ReplaceOne(x => x.Id == id, data);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        //[HttpDelete("{id}")]
        //public async Task Deleteitem(string id)
        //{

        //    //var data = Collection.Find(x => x.Id == id).FirstOrDefault();
        //    var filter = Builders<Slotitem>.Filter.Eq(e => e.Id, id);
        //    //Collection.DeleteOne(Query.EQ("_id", a.Id));
        //    //collection.Remove(Query.EQ("_id", a.Id));
        //    await Collection.DeleteOneAsync(filter);
        //    //Collection.DeleteMany(data.Id);

        //    //public async Task DeleteEmployee(Object id)
        //    //{
        //    //    var filter = Builders<Employee>.Filter.Eq(e => e.Id, id);
        //    //    await _collection.DeleteOneAsync(filter);
        //    //}
        //}

        [HttpGet("{id}")]
        public Insertitem ListItemSlot(string id)
        {
            var data = Collection.Find(x => x.Item.Any(it => it.Id == id)).FirstOrDefault();
            var item = data.Item.FirstOrDefault(it => it.Id == id);
            return item;
            
        }

        [HttpPost("{id}")]
        public void DeleteItemSlot(string id)
        {

            var data = Collection.Find(x => x.Item.Any(it => it.Id == id)).FirstOrDefault();
            var item = data.Item.FirstOrDefault(it => it.Id == id);
            data.Item = data.Item.Where(it => it.Id != id);
            Collection.ReplaceOne(it => it.Id == data.Id,data);

        }



        [HttpPost("[action]")]
        public void Edititem([FromBody]Insertitem model)
        {
            var data = Collection.Find(x => x.Item.Any(it => it.Id == model.Id)).FirstOrDefault();
            var item = data.Item.FirstOrDefault(it => it.Id == model.Id);
            item.Nameitem = model.Nameitem;
            item.quantity = model.quantity; 
            
            Collection.ReplaceOne(x => x.Id == data.Id,data);
        }
    }
}

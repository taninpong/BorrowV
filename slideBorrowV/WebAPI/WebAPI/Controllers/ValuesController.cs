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
    public class ValuesController : Controller
    {
        MongoClient db;
        IMongoCollection<Insertitem> Collection;
        public ValuesController()
        {
            db = new MongoClient("mongodb://borrow:abcd1234@ds237072.mlab.com:37072/borrow");
            var test = db.GetDatabase("borrow");
            Collection = test.GetCollection<Insertitem>("insertitem");
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Insertitem> Get()
        {
            var data = Collection.Find(x => true).ToList();
            return data;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Insertitem Get(string id)
        {
            var data = Collection.Find(x => x.Id == id.ToString()).FirstOrDefault();
            return data;
        }

        // POST api/values
        [HttpPost]
        public bool Createitem([FromBody]Insertitem model)
        {
            //var data = new Insertitem
            //{
            //    Id = "5",
            //    Nameitem = "water",
            //    quantity = 6
            //};
            model.Id = Guid.NewGuid().ToString();
            Collection.InsertOne(model);
            return true;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Delete(string id)
        {
            
            //var data = Collection.Find(x => x.Id == id).FirstOrDefault();
            var filter = Builders<Insertitem>.Filter.Eq(e => e.Id, id);
            //Collection.DeleteOne(Query.EQ("_id", a.Id));
            //collection.Remove(Query.EQ("_id", a.Id));
            await Collection.DeleteOneAsync(filter);
            //Collection.DeleteMany(data.Id);

            //public async Task DeleteEmployee(Object id)
            //{
            //    var filter = Builders<Employee>.Filter.Eq(e => e.Id, id);
            //    await _collection.DeleteOneAsync(filter);
            //}
        }

        // POST api/values
        [Route("/{delete}")]
        [HttpPost]
        public void Delete([FromBody]Insertitem model)
        {
            var data = model.Id;
            Collection.DeleteOne(data);
        }

        [HttpPost("[action]")]
        public void Edit([FromBody]Insertitem model)
        {
            Collection.ReplaceOne(x => x.Id == model.Id, model);
        }
    }
}

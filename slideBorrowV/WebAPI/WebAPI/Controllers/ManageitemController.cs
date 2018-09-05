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
    public class ManageitemController : Controller
    {
        MongoClient db;
        IMongoCollection<Insertitem> Collection;
        public ManageitemController()
        {
            db = new MongoClient("mongodb://borrowv:abcd1234@ds243502.mlab.com:43502/borrowv");
            var test = db.GetDatabase("borrowv");
            Collection = test.GetCollection<Insertitem>("insertitem");
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Insertitem> Getitem()
        {
            var data = Collection.Find(x => true).ToList();
            return data;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Insertitem Getitem(string id)
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
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Deleteitem(string id)
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
        public void Deleteitem([FromBody]Insertitem model)
        {
            var data = model.Id;
            Collection.DeleteOne(data);
        }

        [HttpPost("[action]")]
        public void Edititem([FromBody]Insertitem model)
        {
            Collection.ReplaceOne(x => x.Id == model.Id, model);
        }



    }
}

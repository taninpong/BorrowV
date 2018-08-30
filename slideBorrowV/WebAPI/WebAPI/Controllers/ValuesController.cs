using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using WebApi.Model;

namespace WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ValuesController : Controller
    {
        IMongoCollection<Insertitem> Collection;
        MongoClient db;
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
            return data ;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Insertitem Get(int id)
        {
            var data = Collection.Find(x => x.Id == id.ToString()).FirstOrDefault();
            return data;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Insertitem model)
        {
            //var data = new Insertitem
            //{
            //    Id = "5",
            //    Nameitem = "water",
            //    quantity = 6
            //};
            Collection.InsertOne(model);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

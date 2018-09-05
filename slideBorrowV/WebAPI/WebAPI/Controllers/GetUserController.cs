using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using WebApi.Model;


namespace WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    public class GetUserController : Controller
    {
        MongoClient db;
        IMongoCollection<User> Collection;
        public GetUserController()
        {
            db = new MongoClient("mongodb://borrowv:abcd1234@ds243502.mlab.com:43502/borrowv");
            var test = db.GetDatabase("borrowv");
            Collection = test.GetCollection<User>("History");

        }


        // GET api/values
        [HttpGet]
        public IEnumerable<User> GetUser()
        {
            var data = Collection.Find(x => true).ToList();
            return data;
        }


    }
}

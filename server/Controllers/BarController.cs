using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class BarController : ControllerBase {
        
        List<Bar> bars = new List<Bar> {
            new Bar{ Id = 10001, Name = "Justisen Bar og Bakgård", AveragePrice = 100, ImageURL = "justisen.jpg"},
            new Bar{ Id = 10002, Name = "Summit Bar", AveragePrice = 80, ImageURL = "summit.jpg"},
            new Bar{ Id = 10003, Name = "Calmeyers Hage", AveragePrice = 120, ImageURL = "calmeyers.jpg"},
            new Bar{ Id = 10004, Name = "Grims Grenka Lobbybar", AveragePrice = 110, ImageURL = "grims.jpg"},
            new Bar{ Id = 10005, Name = "Shutter Bar", AveragePrice = 200, ImageURL = "shutter.jpg"},
            new Bar{ Id = 10006, Name = "Bar Bastard", AveragePrice = 130, ImageURL = "bastard.jpg"},
            new Bar{ Id = 10007, Name = "Oslo Street Food", AveragePrice = 1000, ImageURL = "streetfood.jpg"},
            new Bar{ Id = 10008, Name = "Haven", AveragePrice = 60, ImageURL = "haven.jpg"}
        };

        // Endpoint: /api/bar
        // Returns all bar elements
        [HttpGet]
        public IEnumerable<Bar> Get(){
            return bars;
        }

        // Endpoint: /api/bar/p/120
        // Returns a list of bars with prices below provided value
        [HttpGet]
        [Route("p/{price}")]
        public IEnumerable<Bar> GetByPrice(int price){
            return bars.FindAll(bar => bar.AveragePrice < price);
        }

        // Endpoint: /api/bar/single/10001
        // Returns a single bar based on provided ID
        [HttpGet]
        [Route("single/{id}")]
        public Bar GetById(int id){
            return bars.Find(bar => bar.Id == id);
        }


    }
}
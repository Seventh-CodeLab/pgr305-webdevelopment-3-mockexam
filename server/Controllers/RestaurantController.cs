using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]

    public class RestaurantController : ControllerBase {

        List<Restaurant> restaurants = new List<Restaurant>{
            new Restaurant { Id = 10001, Name = "Koie", Genre = "Ramen", AveragePrice = 300, RecommendedDish = "Nagoya Ramen", ImageURL = ""},
            new Restaurant { Id = 10002, Name = "Gohan", Genre = "Japanese", AveragePrice = 140, RecommendedDish = "Tonkatsu Don", ImageURL = ""},
            new Restaurant { Id = 10003, Name = "Los Tacos", Genre = "Taco", AveragePrice = 130, RecommendedDish = "Whatever isn't super spicy", ImageURL = ""}
        };

        [HttpGet]
        public IEnumerable<Restaurant> Get(){
            return restaurants;
        }

        // Endpoint /api/restaurant/c/ramen
        // Returns a list of restaurants matching the category to the type of restaurant (eg. A list of ramen restaurants)
        [HttpGet]
        [Route("c/{category}")]
        public IEnumerable<Restaurant> Get(string category) {
            return restaurants.FindAll(restaurant => restaurant.Genre == category);
        }

        // Endpoint - /api/restaurant/p/400
        // Returns a list of restaurants with average prices below provided value
        [HttpGet]
        [Route("p/{price}")]
        public IEnumerable<Restaurant> Get(int price) {
            return restaurants.FindAll(restaurant => restaurant.AveragePrice < price);
        }
    }
}
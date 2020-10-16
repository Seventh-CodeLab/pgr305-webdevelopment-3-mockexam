namespace server.Models {
    public class Restaurant {
        public int Id { get; set; } 
        public string Name { get; set; }
        public string Genre { get; set; }
        public int AveragePrice { get; set; }
        public string RecommendedDish { get; set; }

        public string ImageURL { get; set; }
    }
}
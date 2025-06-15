const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaurant = require('./models/Restaurant');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for seeding"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const sampleRestaurants = [
  {
    name: "Indian Spices",
    cuisine: "Indian",
    rating: 4.5,
    image: "/images/indian.jpg",
    menu: ['Butter Chicken: Rs.230', 'Paneer Tikka: Rs.190', 'Mix Veg: Rs.210', 'Pav Bhaji: Rs.110', 'Biryani: Rs.240', 'Chole Bhature: Rs.125', 'Misal Pav: Rs.100'],
  },
  {
    name: "Flavours Of Italy",
    cuisine: "Italian",
    rating: 4.2,
    image: "/images/italy.jpg",
    menu: ['Pasta', 'Pizza', 'Lasagna', 'Tiramisu', 'Burrata', 'Neapolitan Pizza', 'Carbonara'],
  },
  {
    name: "Sushi House",
    cuisine: "Japanese",
    rating: 4.8,
    image: "/images/japnese.jpg",
    menu: ['Sushi Roll', 'Tempura', 'Ramen', 'Miso Soup', 'Dumpling', 'Takoyaki', 'Japanese Cheesecake'],
  },
  {
    name: "Burger Barn",
    cuisine: "American",
    rating: 4.3,
    image: "/images/america.jpg",
    menu: ['Cheeseburger', 'Fries', 'Chicken Wings', 'Milkshake', 'Chicken Nuggets', 'Southern Fried Chicken', 'Bagels'],
  },
  {
    name: "Taco Town",
    cuisine: "Mexican",
    rating: 4.4,
    image: "/images/mexican.jpg",
    menu: ['Tacos', 'Burritos', 'Nachos', 'Quesadillas', 'Pozole', 'Mexican Rice', 'Baked Beans'],
  },
  {
    name: "Green Delight",
    cuisine: "Korean",
    rating: 4.6,
    image: "/images/korian.jpg",
    menu: ['Kimchi', 'Bibimbap', 'Korean BBQ', 'Tteokbokki', 'Korean Fried Chicken', 'Samyun'],
  }
];

async function seed() {
  try {
    await Restaurant.deleteMany(); // clear existing data
    await Restaurant.insertMany(sampleRestaurants);
    console.log("Sample restaurants inserted ✅");
    mongoose.disconnect();
  } catch (err) {
    console.error("Seeding failed ❌", err);
  }
}

seed();

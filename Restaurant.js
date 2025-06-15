const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  rating: Number,
  image: String,
  menu: [String],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);

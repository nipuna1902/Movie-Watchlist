const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: Number,
  genre: String,
  watched: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model('Movie',watchlistSchema);
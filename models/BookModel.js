const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  rating: { type: Number, required: true },
  genres: { type: [String], required: true },
});

module.exports = mongoose.model("Book", bookSchema);

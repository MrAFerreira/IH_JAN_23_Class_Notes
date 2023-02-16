const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = model('Movie', movieSchema);

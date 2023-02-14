const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    content: String,
    //create a relationship with another model
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Review', reviewSchema);

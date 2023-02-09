const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schemas act like blueprints for the objects and as validation methods
const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    //unique: true,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 38,
  },
  color: {
    type: String,
    //lowercase actually transforms the user input
    lowercase: true,
    enum: ['black', 'white', 'grey', 'orange'],
  },
  pictureUrl: {
    type: String,
    default:
      'https://assets.reedpopcdn.com/longcat3.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/longcat3.jpg',
  },
});

//const Cat = mongoose.model('Cat', { name: String });
const Cat = mongoose.model('Cat', catSchema);

//exporting the model
module.exports = Cat;

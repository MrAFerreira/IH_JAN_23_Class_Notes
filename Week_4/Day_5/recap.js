const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pokemon_type: {
    type: String,
    lowercase: true,
    enum: ['fire', 'water', 'grass'],
  },
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const bulbasaur = { name: 'Bulbasaur', pokemon_type: 'Grass' };

Pokemon.create(bulbasaur);
//
Pokemon.findOne({ name: 'bulbasaur' });

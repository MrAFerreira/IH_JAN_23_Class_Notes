const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

//app.set('views', __dirname + "\views")
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Partials
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/pokedex', (req, res) => {
  const pokemon = [
    {
      name: 'Bulbasaur',
      id: 1,
      type: 'Grass',
      imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      sprites: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      ],
    },
    {
      name: 'Charmander',
      id: 4,
      type: 'Fire',
      imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      sprites: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
      ],
    },
    {
      name: 'Squirtle',
      id: 7,
      type: 'Water',
      imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      sprites: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      ],
    },
    {
      name: 'Chikorita',
      id: 152,
      type: 'Grass',
      imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png',
      sprites: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/152.png',
      ],
    },
    {
      name: 'Cyndaquill',
      id: 155,
      type: 'Fire',
      imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png',
      sprites: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/155.png',
      ],
    },
    {
      name: 'Totodile',
      id: 158,
      type: 'Water',
      imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png',
      sprites: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/158.png',
      ],
    },
  ];
  res.render('pokedex', { pokemon });
});

app.get('/items', (req, res) => {
  let data = {
    layout: false,
    footer: true,
  };
  res.render('items', data);
});

app.listen(3000, () => console.log('Server running on port 3000'));

//API
//Application Programming Interface

//REST API

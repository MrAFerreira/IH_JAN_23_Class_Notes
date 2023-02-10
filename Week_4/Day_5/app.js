const express = require('express');
const app = express();
const hbs = require('hbs');
//require bodyparser
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//make the app use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

//fake middleware

function fakeMiddleware(req, res, next) {
  req.secret = 'Digimon is not cool';
  console.log('Middleware activated');
  next();
}

app.use(fakeMiddleware);

app.get('/', (req, res) => {
  res.send('Hello');
});

//Route params
app.get('/user/:username/playlists/:playlistId', (req, res) => {
  // localhost:3000/user/tomas/playlist
  let { username, playlistId } = req.params;
  console.log(username, playlistId);
  /* 
 req. params looks like this
 req.params =  {
    usrname: "lucas"
  } */
  res.send(req.url);
});

app.get('/search', (req, res) => {
  // http://localhost:3000/search?city=Lisbon&country=Portugal
  console.log(req.query);
  res.send(req.query);
});

app.get('/travel', (req, res) => {
  res.render('searchform');
});

//We use the get to show the view
app.get('/login', (req, res) => {
  res.render('loginform');
});

//Post receives the information from the form
app.post('/login', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/test', (req, res) => {
  console.log(req.secret);
  res.send('We made it to this page');
});

//CRUD
// C - POST
// R - GET
// U - PUT
// D - DELETE

// http://localhost:3000/travel?city=Porto&start-date=2023-02-11&end-date=2023-02-13

//http://localhost:3000/travel?password=bulbasauristhebest

app.listen(3000, () => console.log('Listening on port 3000'));

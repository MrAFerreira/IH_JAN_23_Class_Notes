const express = require('express');
const hbs = require('hbs');

const app = express();

//Tell express where the views folder is
app.set('views', __dirname + '/views');

//Tell express what template engine to use
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  let data = {
    name: 'João',
    bootcamp: 'WebDev',
    loggedIn: false,
    cities: ['Lisbon', 'Barcelona', 'Coimbra', 'Natal', 'Santo Tirso', 'Goiania'],
  };

  //on the render method we pass the name of the view and the information to send
  //WE CAN ONLY SEND OBJECTS (the name data can be anything)
  res.render('index', data);
});

app.listen(3000, () => console.log('I mustache you a question'));

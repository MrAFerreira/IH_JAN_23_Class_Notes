//http comes by default with node
/* const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello world');
    response.end();
  } else if (request.url === '/pokemon') {
    response.write('Hello pokemon');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('Page not found');
    response.end();
  }
});

server.listen(3000); */

//require express
const express = require('express');

//create an app/server
const app = express();

//Link the public folder (images, css, sounds)
app.use(express.static('public'));

//we pass the port number and a callback function that triggers when the server starts listening

/* app.get('/home', (request, response) => {
  response.send('<h1>Welcome to the homepage</h1>');
}); */

//Create routes for the pages on your website
app.get('/home', (request, response) => {
  //dirname will be different deppending on the computer that runs it
  //console.log(__dirname);
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/profile', (request, response) => {
  //Send the file
  response.sendFile(__dirname + '/views/profile.html');
});

app.listen(3000, () => console.log('Server running on port 300'));

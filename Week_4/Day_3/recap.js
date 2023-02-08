//console.log('Hello world');

const express = require('express');

const app = express();

// "/"

app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/home', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => console.log('Server running on port 3000'));

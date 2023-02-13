app.use(bodyParser);
app.get('/user/:username/books/:bookId', (req, res) => {
  // /user/alex
  /*  let usrname = req.params.username
  let bookId = req.params.bookId */

  let { username, bookId } = req.params;

  /* username = "alex"
  req.params = {
    username: "alex"
  } */

  res.render('profile');
});

app.get('/search', (req, res) => {
  //city, start-date, end-date
  let { city, startDate } = req.query;

  req.query = {
    city: 'Lisbon',
    startDate: 'Fev',
    endDate: 'Mar',
  };

  res.render('search-result');
});

app.post('/signup', (req, res) => {
  let { email, password } = req.body;

  res.render('signup');
});

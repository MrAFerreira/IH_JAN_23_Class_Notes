const router = require('express').Router();
const Book = require('../models/Book.model');

//Get All

router.get('/books', async (req, res, next) => {
  try {
    //Book.find() without any arguments retrieves an array with all the books from the db
    let books = await Book.find();
    //render the view with the information
    res.render('books/book-list', { books });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Create book view
router.get('/books/create', (req, res) => res.render('books/book-create'));

//Post route to recive the information and create the book on the db
router.post('/books/create', async (req, res, next) => {
  try {
    //extract info from req.body
    const { title, description, author, rating } = req.body;
    //create the book in the db
    await Book.create({ title, description, author, rating });

    //redirect to the list again
    res.redirect('/books');
    //await Book.create(req.body)
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Edit form
router.get('/books/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('books/book-edit', book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/books/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, author, rating } = req.body;

    await Book.findByIdAndUpdate(id, { title, description, author, rating });

    res.redirect(`/books/${id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//delete a book

router.post('/books/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.redirect('/books');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Get Details
router.get('/books/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    //get a single book by id
    const book = await Book.findById(id);
    //render the view with the book
    res.render('books/book-details', book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

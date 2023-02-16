const router = require('express').Router();
const Movie = require('../models/Movie.model');
const fileUploader = require('../config/cloudinary.config');

router.get('/list', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render('movies/list', { movies });
  } catch (error) {
    next(error);
  }
});

router.get('/create', (req, res) => res.render('movies/create'));

router.post('/create', fileUploader.single('poster'), async (req, res, next) => {
  try {
    const { title, description } = req.body;
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = 'https://pbs.twimg.com/media/BpDirGXIAAAv1H-.jpg';
    }

    await Movie.create({ title, description, imageUrl });

    res.redirect('/');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render('movies/edit', movie);
  } catch (error) {
    next(error);
  }
});

router.post('/edit/:id', fileUploader.single('poster'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, currentImage } = req.body;
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = currentImage;
    }

    await Movie.findByIdAndUpdate(id, { title, description, imageUrl });

    res.redirect('/movies/list');
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;

const router = require('express').Router();
const ApiService = require('../services/api');
const api = new ApiService();

router.get('/all', async (req, res, next) => {
  try {
    const response = await api.getAllCharacters();
    const characters = response.data;
    res.render('character/list', { characters });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/create', (req, res) => res.render('character/create'));

router.post('/create', async (req, res, next) => {
  try {
    const { name, occupation, weapon } = req.body;

    //Create the character on the external API
    await api.createCharacter({ name, occupation, weapon });

    res.redirect('/characters/all');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/edit/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await api.getOneCharacter(id);
    const character = response.data;

    console.log(character);
    res.render('character/edit', character);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/edit/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, occupation, weapon } = req.body;

    await api.editCharacter(id, { name, occupation, weapon });

    res.redirect('/characters/all');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await api.deleteCharacter(id);

    res.redirect('/characters/all');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

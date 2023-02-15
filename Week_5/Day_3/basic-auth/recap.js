/* const axios = require('axios');

// https://pokeapi.co/api/v2/pokemon/ditto
const getPokemon = async (name) => {
  try {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    let pokemon = response.data;
    console.log(pokemon);
  } catch (error) {
    console.log(error);
  }
};
const createPokemon = async () => {
  try {
    let pokemon = {
      name: 'Lapis',
      type: 'Grass',
    };

    await axios.post(`https://pokeapi.co/api/v2/pokemon`, {name: "Borracha"});
  } catch (error) {
    console.log(error);
  }
};

getPokemon('mudkip');
 */

Posts;
Comments;

let postExample = {
  title: 'Good morning',
  content: 'I love mongoose!',
  comments: ['34567uyfgdcghj', '976ytyiuhjbgvjb'],
  author: '678yughj',
};
let commentExammple = {
  content: 'Helooo',
  author: 'io7uytghjk',
};

//Inside a route...

//Post -> Comment -> Author
let post = await Post.findById(id)
  .populate('comments author')
  .populate({
    path: 'comments',
    populate: {
      path: 'author',
      model: 'User',
    },
  });

/* let user = await User.findById(id).populate('reviews'); */

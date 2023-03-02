import React, { useState } from 'react';
import axios from 'axios';

function Pokedex() {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //make the call to the api
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
      setPokemon(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Pokedex</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Pokemon</label>
        <input type="text" name="search" value={search} onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
        </div>
      )}
    </div>
  );
}

export default Pokedex;

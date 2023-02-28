import React from 'react';

function List() {
  //const pokemons = ['Bulbasaur', 'Charmander', 'Squirtle'];
  const pokemons = [
    { name: 'Bulbasaur', type: 'Grass', id: 1 },
    { name: 'Charmander', type: 'Fire', id: 4 },
    { name: 'Squirtle', type: 'Water', id: 7 },
  ];

  return (
    <div>
      <h2>Pokemon</h2>
      {/*   {pokemons.map((poke, index) => {
          return <li key={index}>{poke}</li>;
        })} */}

      {pokemons.map((poke) => {
        return (
          <div className="card" key={poke.id}>
            <h1>{poke.name}</h1>
            <h3>Type: {poke.type}</h3>
            <p>Pokedex Number: {poke.id} </p>
          </div>
        );
      })}
    </div>
  );
}

export default List;

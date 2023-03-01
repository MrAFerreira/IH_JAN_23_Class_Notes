import React, { useState } from 'react';

function AddMovie({ addToList }) {
  //Create the state for the inputs
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [hasOscars, setHasOscars] = useState(false);
  const [IMDBRating, setIMDBRating] = useState(5);

  //handler functions

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDirector = (e) => setDirector(e.target.value);
  const handleIMDBRating = (e) => setIMDBRating(Number(e.target.value));
  const handleHasOscars = (e) => setHasOscars(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = { title, director, IMDBRating, hasOscars };
    console.log(newMovie);
    addToList(newMovie);

    setTitle('');
    setDirector('');
    setIMDBRating(5);
    setHasOscars(false);
  };

  return (
    <div>
      <h2>Add a movie</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="director">Director</label>
        <input type="text" name="director" value={director} onChange={handleDirector} />

        <label htmlFor="IMDBRating">IMDBRating</label>
        <input type="number" name="IMDBRating" value={IMDBRating} onChange={handleIMDBRating} />

        <label htmlFor="hasOscars"> Won an oscar:</label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={handleHasOscars} />

        <button type="submit">Add movie</button>
      </form>
    </div>
  );
}

export default AddMovie;

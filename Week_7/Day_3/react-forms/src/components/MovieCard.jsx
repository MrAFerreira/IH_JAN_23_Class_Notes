import React from 'react';

function MovieCard(props) {
  const { movie, deleteMovie } = props;

  const checkRating = (rating) => {
    if (rating > 9) {
      return 'green';
    } else if (rating < 9 && rating > 7) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p className={checkRating(movie.IMDBRating)}>Rating: {movie.IMDBRating}</p>

      {/*  {movie.hasOscars && <p>Got an Oscar!</p>}
      {!movie.hasOscars && <p>Great movie but no Oscars!</p>} */}

      {movie.hasOscars ? <p>Got an Oscar!</p> : <p>Great movie but no Oscars!</p>}

      <button onClick={() => deleteMovie(movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;

import React, { useState } from 'react';
import moviesJSON from '../assets/movies.json';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(moviesJSON);

  //delete function

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => {
        return <MovieCard movie={movie} deleteMovie={deleteMovie} key={movie._id} />;
      })}
    </div>
  );
}

export default MovieList;

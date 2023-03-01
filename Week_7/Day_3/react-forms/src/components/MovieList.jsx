import React, { useState } from 'react';
import moviesJSON from '../assets/movies.json';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import Searchbar from './Searchbar';

function MovieList() {
  const [movies, setMovies] = useState(moviesJSON);
  const [showMovies, setShowMovies] = useState(moviesJSON);

  //delete function

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });
    setMovies(filteredMovies);
  };

  const addToList = (movie) => {
    const moviesCopy = [...movies, movie];
    //moviesCopy.push(movie);
    setMovies(moviesCopy);
  };

  const searchMovies = (query) => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setShowMovies(filteredMovies);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <AddMovie addToList={addToList} />
      <Searchbar searchMovies={searchMovies} />
      {showMovies.map((movie) => {
        return <MovieCard movie={movie} deleteMovie={deleteMovie} key={movie._id} />;
      })}
    </div>
  );
}

export default MovieList;

import React, { useState } from 'react';

function Searchbar({ searchMovies }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchMovies(e.target.value);
  };
  return (
    <div>
      <h2>Search Movies</h2>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default Searchbar;

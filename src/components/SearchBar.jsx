/* ======================================================
    Lab 8 - SearchBar.jsx starter
====================================================== */

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      onSearch(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <label htmlFor="movie-search" className="visuallyHidden">
        Search for a movie title
      </label>
      <input
        id="movie-search"
        type="search"
        placeholder="e.g. Batman"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/*e = event - used to set the event target value (search term)*/}
      <button type="submit" className="primary">
        Search Movies
      </button>
    </form>
  );
}

/* ======================================================
    Lab 8 - App.jsx starter
====================================================== */

import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import MovieGrid from './components/MovieGrid.jsx';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('Batman');
  const [watchlist, setWatchlist] = useState([]);

  //const API_KEY = "ENTER_OMDB_API_KEY_HERE";

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError('');

    if (!API_KEY || API_KEY === 'ENTER_OMDB_API_KEY_HERE') {
      setMovies([]);
      setError('No API key');
      setIsLoading(false);
      return;
    }

    try {
      const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found.');
      }
    } catch (err) {
      setError('Failed to fetch movies.');
      setMovies([]);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const alreadyExists = prevWatchlist.some(
        (item) => item.imdbID === movie.imdbID,
      );
      if (alreadyExists) {
        return prevWatchlist;
      }
      return [...prevWatchlist, movie];
    });
  };

  /*Conditional Rendering for 11A */
  let results;
  if (isLoading) {
    results = <p className="status">Loading...</p>;
  } else if (error !== '') {
    results = (
      <p className="status error" role="alert">
        {error}
      </p>
    );
  } else if (movies.length === 0) {
    results = <p className="status">No movies found.</p>;
  } else {
    results = <MovieGrid movies={movies} addToWatchlist={addToWatchlist} />;
  }
  return (
    <div className="page">
      <Header title="Movie Search" searchTerm={searchTerm} />
      <SearchBar onSearch={handleSearch} />

      <main className="panel">
        {results}

        <h2>My Watchlist</h2>
        {watchlist.length === 0 ? (
          <p className="status">No movies in watchlist yet.</p>
        ) : (
          <ul>
            {watchlist.map((movie) => (
              <li key={movie.imdbID}>
                {movie.Title} ({movie.Year})
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

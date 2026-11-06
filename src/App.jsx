/* ======================================================
    Lab 8 - App.jsx starter
====================================================== */

import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieGrid from "./components/MovieGrid.jsx";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [watchlist, setWatchlist] = useState([]);

  //const API_KEY = "ENTER_OMDB_API_KEY_HERE";

  const API_KEY = import.meta.env.OMDB_API_KEY;

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError("");

    if (!API_KEY || API_KEY === "ENTER_OMDB_API_KEY_HERE") {
      setMovies([]);
      setError("No API key");
      setIsLoading(false);
      return;
    }

    try {
      const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      // TODO 5:
      // If data.Response is True, store data.Search in movies, use setMovies.
      // Otherwise:
      // - set movies to [] (like TODO 4)
      // - set error to data.Error or “No movies found”
    } catch (err) {
      // TODO 6:
      // Set error to "Failed to fetch movies."
      // Set movies to []
    } finally {
      // TODO 7:
      // Set isLoading to false
    }
  };

  useEffect(() => {
    // TODO 8:
    // Call fetchMovies with searchTerm
    // This should run on first load and when searchTerm changes.
  }, [searchTerm]);

  const handleSearch = (newSearchTerm) => {
    // TODO 9:
    // Update searchTerm using the value received from SearchBar.
    // Do not call fetchMovies directly here.
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

  return (
    <div className="page">
      <Header title="Movie Search" searchTerm={searchTerm} />

      {/* TODO 10:
          Render SearchBar and pass handleSearch as onSearch
      */}

      <main className="panel">
        {/* TODO 11A:
            Conditional rendering:
            - If isLoading is true, show <p className="status">Loading...</p>
            - Else if error is not empty, show <p className="status error">{error}</p>
            - Else if movies.length === 0, show
              <p className="status">No movies found.</p>
            - Otherwise render <MovieGrid movies={movies} addToWatchlist={addToWatchlist} />
        */}

        {/* TODO 11B:
            Add a watchlist section below the search results.
            - Show a heading such as "My Watchlist"
            - If watchlist.length === 0, show "No movies in watchlist yet."
            - Otherwise map through watchlist and render each saved movie
        */}
      </main>
    </div>
  );
}

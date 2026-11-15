/* ======================================================
    Lab 8 - Header.jsx starter
====================================================== */

export default function Header({ title, searchTerm }) {
  return (
    <header className="hero">
      <h1>{title}</h1>
      <p>Search movies, see more information, save your watchlist</p>
      <p className="heroMeta">Showing results for {searchTerm}</p>
    </header>
  );
}

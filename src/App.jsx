// App.jsx
// Root component.
// Manages global movie state and defines the route structure.

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";

// Pages
import Home        from "./pages/Home";
import Movies      from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import AddMovie    from "./pages/AddMovie";
import About       from "./pages/About";
import NotFound    from "./pages/NotFound";

// localStorage helpers
import { loadMovies, saveMovies } from "./utils/storage";

export default function App() {
  /**
   * movies is the single source of truth for the film collection.
   * useState is initialised lazily with a function so localStorage is only
   * read once on mount rather than on every render.
   */
  const [movies, setMovies] = useState(() => loadMovies());

  /**
   * Called by <AddMovie> after the user submits the form.
   * Appends the new movie, persists the updated list, and triggers a re-render.
   */
  function handleAddMovie(newMovie) {
    const updated = [...movies, newMovie];
    setMovies(updated);
    saveMovies(updated);   // keep localStorage in sync
  }

  return (
    <>
      {/* Navbar is always visible regardless of the current route */}
      <Navbar />

      {/*
        Routes inspects the current URL and renders the first <Route> whose
        path matches.  The wildcard "*" catches every unmatched path (404).
      */}
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/movies"   element={<Movies movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        <Route path="/add"      element={<AddMovie onAdd={handleAddMovie} />} />
        <Route path="/about"    element={<About />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </>
  );
}

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home        from "./pages/Home";
import Movies      from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import AddMovie    from "./pages/AddMovie";
import About       from "./pages/About";
import NotFound    from "./pages/NotFound";

import { loadMovies, saveMovies } from "./utils/storage";

export default function App() {
  const [movies, setMovies] = useState(() => loadMovies());
  function handleAddMovie(newMovie) {
    const updated = [...movies, newMovie];
    setMovies(updated);
    saveMovies(updated);   
  }

  return (
    <>
      <Navbar />

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

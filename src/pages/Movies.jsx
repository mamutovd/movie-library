// pages/Movies.jsx
// Displays all movies as a responsive grid of clickable cards

import { useNavigate, Link } from "react-router-dom";

export default function Movies({ movies }) {
  // useNavigate lets us programmatically change routes
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      {/* ── Page Header ── */}
      <div className="movies-header fade-up">
        <div>
          <h1 className="page-title">Library</h1>
          <p className="page-subtitle">Your curated film collection</p>
        </div>
        <span className="movie-count">{movies.length} films</span>
      </div>

      {/* ── Movie Grid ── */}
      <div className="movies-grid">
        {movies.length === 0 ? (
          /* Empty state when no movies exist */
          <div className="empty-state">
            <span className="empty-icon">🎞</span>
            <h3>Your library is empty</h3>
            <p>Start building your collection by adding your first movie.</p>
            <Link to="/add" className="btn-ghost" style={{ marginTop: "0.5rem" }}>
              + Add Movie
            </Link>
          </div>
        ) : (
          /* Map each movie to a card component */
          movies.map((movie, idx) => (
            <article
              key={movie.id}
              className="movie-card fade-up"
              style={{ animationDelay: `${idx * 0.06}s` }}
              onClick={() => navigate(`/movies/${movie.id}`)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${movie.title}`}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/movies/${movie.id}`)}
            >
              {/* Poster image */}
              <div className="movie-card-img-wrap">
                <img
                  src={movie.image}
                  alt={`${movie.title} poster`}
                  onError={(e) => {
                    // Fallback gradient if image URL is broken
                    e.target.style.display = "none";
                  }}
                />
                {/* Rating badge overlaid on image */}
                <span className="movie-card-rating">★ {movie.rating}</span>
              </div>

              {/* Card body */}
              <div className="movie-card-body">
                <h2 className="movie-card-title">{movie.title}</h2>
                <span className="movie-card-year">{movie.year}</span>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

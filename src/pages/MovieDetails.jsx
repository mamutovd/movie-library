import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails({ movies }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="page-wrapper">
        <div className="not-found" style={{ minHeight: "50vh" }}>
          <h2>Movie not found</h2>
          <p>The film you're looking for doesn't exist in your library.</p>
          <button
            className="detail-back-btn"
            onClick={() => navigate("/movies")}
            style={{ marginTop: "1rem" }}
          >
            ← Back to Library
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {/* Back button – navigates to the previous page in history */}
      <button className="detail-back-btn fade-up" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Two-column detail layout */}
      <div className="detail-layout fade-up stagger-1">
        {/* ── Poster ── */}
        <div className="detail-img-wrap">
          <img src={movie.image} alt={`${movie.title} poster`} />
        </div>

        {/* ── Info column ── */}
        <div className="detail-info">
          {/* Year & rating metadata row */}
          <div className="detail-meta">
            <span className="detail-year">{movie.year}</span>
            <span className="detail-rating">
              <span className="star">★</span> {movie.rating} / 10
            </span>
          </div>

          {/* Movie title */}
          <h1 className="detail-title">{movie.title}</h1>

          {/* Visual divider */}
          <div className="detail-divider" />

          {/* Description / synopsis */}
          <p className="detail-desc">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

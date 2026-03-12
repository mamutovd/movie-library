import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateId } from "../utils/storage";

const INITIAL_FORM = {
  title: "",
  year: "",
  rating: "",
  description: "",
  image: "",
};

export default function AddMovie({ onAdd }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const next = {};
    if (!form.title.trim())           next.title = "Title is required";
    if (!form.year)                   next.year  = "Year is required";
    else if (form.year < 1888 || form.year > new Date().getFullYear() + 5)
      next.year = "Enter a valid year";
    if (!form.rating)                 next.rating = "Rating is required";
    else if (form.rating < 0 || form.rating > 10)
      next.rating = "Rating must be between 0 and 10";
    if (!form.description.trim())     next.description = "Description is required";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newMovie = {
      id: generateId(),
      title: form.title.trim(),
      year: Number(form.year),
      rating: Number(form.rating),
      description: form.description.trim(),
      image:
        form.image.trim() ||
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
    };

    onAdd(newMovie);

    setForm(INITIAL_FORM);

    navigate("/movies");
  }

  return (
    <div className="page-wrapper">
      <h1 className="page-title fade-up">Add Film</h1>
      <p className="page-subtitle fade-up stagger-1">
        Log a new movie to your personal library.
      </p>

      <div className="form-card fade-up stagger-2">
        {/* onSubmit is handled in JS – no page reload */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {/* ── Title ── */}
            <div className="form-group full-width">
              <label className="form-label" htmlFor="title">
                Movie Title *
              </label>
              <input
                id="title"
                name="title"
                className="form-input"
                placeholder="e.g. 2001: A Space Odyssey"
                value={form.title}
                onChange={handleChange}
                maxLength={120}
              />
              {errors.title && <ErrorMsg msg={errors.title} />}
            </div>

            {/* ── Year ── */}
            <div className="form-group">
              <label className="form-label" htmlFor="year">
                Release Year *
              </label>
              <input
                id="year"
                name="year"
                type="number"
                className="form-input"
                placeholder="e.g. 2024"
                value={form.year}
                onChange={handleChange}
                min={1888}
                max={2030}
              />
              {errors.year && <ErrorMsg msg={errors.year} />}
            </div>

            {/* ── Rating ── */}
            <div className="form-group">
              <label className="form-label" htmlFor="rating">
                Rating (0–10) *
              </label>
              <input
                id="rating"
                name="rating"
                type="number"
                className="form-input"
                placeholder="e.g. 8.5"
                value={form.rating}
                onChange={handleChange}
                min={0}
                max={10}
                step={0.1}
              />
              {errors.rating && <ErrorMsg msg={errors.rating} />}
            </div>

            {/* ── Image URL ── */}
            <div className="form-group full-width">
              <label className="form-label" htmlFor="image">
                Image URL (optional)
              </label>
              <input
                id="image"
                name="image"
                type="url"
                className="form-input"
                placeholder="https://example.com/poster.jpg"
                value={form.image}
                onChange={handleChange}
              />
            </div>

            {/* ── Description ── */}
            <div className="form-group full-width">
              <label className="form-label" htmlFor="description">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                className="form-textarea"
                placeholder="Brief synopsis or your personal notes about the film…"
                value={form.description}
                onChange={handleChange}
                maxLength={600}
              />
              {errors.description && <ErrorMsg msg={errors.description} />}
            </div>
          </div>

          {/* Submit button */}
          <button type="submit" className="form-submit">
            Add to Library
          </button>
        </form>
      </div>
    </div>
  );
}

function ErrorMsg({ msg }) {
  return (
    <span
      style={{
        fontSize: "0.75rem",
        color: "var(--accent2)",
        marginTop: "-0.25rem",
      }}
    >
      {msg}
    </span>
  );
}

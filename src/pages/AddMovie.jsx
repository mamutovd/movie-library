// pages/AddMovie.jsx
// Form to add a new movie to the library.
// Uses React controlled inputs (useState) and redirects after submit.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateId } from "../utils/storage";

// Initial empty form state – kept outside component to avoid re-creation on every render
const INITIAL_FORM = {
  title: "",
  year: "",
  rating: "",
  description: "",
  image: "",
};

export default function AddMovie({ onAdd }) {
  // Controlled form state – each key maps to a form field
  const [form, setForm] = useState(INITIAL_FORM);

  // Validation error messages keyed by field name
  const [errors, setErrors] = useState({});

  // useNavigate used to redirect to /movies after successful submission
  const navigate = useNavigate();

  // Generic change handler – updates any field by name
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  // Simple client-side validation
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

  // Form submission handler
  function handleSubmit(e) {
    // Prevent the default browser form submission / page reload
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build the new movie object
    const newMovie = {
      id: generateId(),
      title: form.title.trim(),
      year: Number(form.year),
      rating: Number(form.rating),
      description: form.description.trim(),
      // Fallback image if the user left the field blank
      image:
        form.image.trim() ||
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
    };

    // Propagate the new movie up to App (which saves to localStorage)
    onAdd(newMovie);

    // Reset the form
    setForm(INITIAL_FORM);

    // Redirect to the movie list
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

// Small reusable inline error message component
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

// pages/NotFound.jsx
// Rendered when no route matches the current URL

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <div className="not-found fade-up">
        {/* Large decorative 404 number */}
        <div className="big-num" data-text="404">
          404
        </div>

        <h2>Scene Not Found</h2>
        <p>
          The page you're looking for was cut from the final edit. It may have
          been moved, renamed, or never existed.
        </p>

        {/* Navigate back to safety */}
        <Link to="/" className="btn-ghost" style={{ marginTop: "0.5rem" }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

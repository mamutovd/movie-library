// pages/About.jsx
// Static page describing the application

const features = [
  { icon: "🎬", text: "Browse your curated film collection" },
  { icon: "🔍", text: "View detailed information for each movie" },
  { icon: "➕", text: "Add new films via a quick-entry form" },
  { icon: "💾", text: "All data persisted in your browser via localStorage" },
  { icon: "⚡", text: "Instant page transitions with React Router v6" },
  { icon: "📱", text: "Responsive layout for any screen size" },
];

export default function About() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title fade-up">About</h1>
      <p className="page-subtitle fade-up stagger-1">
        The story behind CineVault
      </p>

      <div className="about-layout fade-up stagger-2">
        {/* Left column – descriptive text */}
        <div className="about-text">
          <p>
            <strong style={{ color: "var(--text)" }}>CineVault</strong> is a
            personal movie library built with React. It was created to showcase
            modern React patterns including functional components, hooks, and
            client-side routing with React Router v6.
          </p>
          <p>
            Rather than relying on a backend server, CineVault stores your entire
            movie collection directly in your browser's localStorage. This means
            your data travels with your browser session and is always available
            offline.
          </p>
          <p>
            The project is intentionally minimal – no Redux, no external state
            managers, no API calls. Just React, React Router, and the Web Storage
            API demonstrating that powerful UIs don't always need complex tooling.
          </p>
          <p>
            Feel free to use it as a learning reference, a starter template, or
            your actual film diary.
          </p>
        </div>

        {/* Right column – features list */}
        <div className="about-features">
          <h3>Features</h3>
          {features.map((f) => (
            <div key={f.text} className="feature-item">
              <span className="fi-icon">{f.icon}</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

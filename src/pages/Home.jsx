import { Link } from "react-router-dom";

const navCards = [
  {
    to: "/movies",
    icon: "🎬",
    label: "Browse Movies",
    desc: "Explore your entire film collection",
  },
  {
    to: "/add",
    icon: "＋",
    label: "Add Movie",
    desc: "Log a new film to your library",
  },
  {
    to: "/about",
    icon: "ℹ",
    label: "About",
    desc: "Learn more about CineVault",
  },
];

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section className="home-hero fade-up">
        <span className="home-tagline">Your Personal Film Archive</span>

        <h1 className="page-title" style={{ maxWidth: "700px" }}>
          Discover, Track &amp; Curate Cinema
        </h1>

        <p className="page-subtitle">
          CineVault is your private movie library. Browse your collection, dive
          into details, and add new films – all stored locally in your browser.
        </p>

        {/* Primary CTA */}
        <Link
          to="/movies"
          className="btn-ghost"
          style={{ color: "var(--accent)", borderColor: "rgba(232,197,71,0.35)" }}
        >
          Browse Library →
        </Link>
      </section>

      {/* ── Quick Navigation Cards ── */}
      <section className="fade-up stagger-2">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}
        >
          Explore
        </h2>

        <div className="home-nav-grid">
          {navCards.map((card) => (
            <Link key={card.to} to={card.to} className="home-nav-card">
              <span className="card-icon">{card.icon}</span>
              <span className="card-label">{card.label}</span>
              <span className="card-desc">{card.desc}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

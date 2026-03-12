// components/Navbar.jsx
// Sticky navigation bar rendered on every page

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        {/* Brand logo – links back to home */}
        <NavLink to="/" className="navbar-logo">
          CINE<span>VAULT</span>
        </NavLink>

        {/* Navigation links – NavLink adds the "active" class automatically */}
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* Highlighted CTA link */}
          <li className="nav-add">
            <NavLink to="/add">+ Add Movie</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          CINE<span>VAULT</span>
        </NavLink>

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
          <li className="nav-add">
            <NavLink to="/add">+ Add Movie</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

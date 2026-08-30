import { Link, useLocation } from "react-router-dom";
import "../styles/style.css";

export default function Navbar({ onLogoClick, onPageClick }) {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="navbar-home" onClick={onLogoClick}>
            <Link to="/">Nonhuman Teachers</Link>
          </div>
        </div>
        <div className="right">
          <div className="navbar-item navbar-mobile">
            <Link to="/" className={location.pathname === "/" ? "selected" : ""}>Home</Link>
          </div>
          <div className="navbar-item" onClick={onPageClick}>
            <Link to="/about" className={location.pathname === "/about" ? "selected" : ""}>About</Link>
          </div>

          <div className="navbar-item" onClick={onPageClick}>
            <Link to="/projects" className={location.pathname === "/projects" ? "selected" : ""}>Projects</Link>
          </div>
          <div className="navbar-item" onClick={onPageClick}>
            <Link to="/events" className={location.pathname === "/events" ? "selected" : ""}>Events</Link>
          </div>

          <div className="navbar-item" onClick={onPageClick}>
            <Link to="/support" className={location.pathname === "/support" || location.pathname === "/donate" ? "selected" : ""}>Support</Link>

          </div>

          <div className="navbar-item" onClick={onPageClick}>
            <Link to="/contact" className={location.pathname === "/contact" ? "selected" : ""}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

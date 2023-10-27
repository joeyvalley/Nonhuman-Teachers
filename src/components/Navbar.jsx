import { Link, useLocation } from "react-router-dom";
import "../styles/style.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="navbar-home">
            <Link to="/">Nonhuman Teachers</Link>
          </div>
        </div>
        <div className="right">
          <div className="navbar-item">
            <Link to="/about" className={location.pathname === "/about" ? "selected" : ""}>About</Link>
          </div>

          <div className="navbar-item">
            <Link to="/projects" className={location.pathname === "/projects" ? "selected" : ""}>Projects</Link>
          </div>
          <div className="navbar-item">
            <Link to="/gallery" className={location.pathname === "/gallery" ? "selected" : ""}>Gallery</Link>
          </div>

          <div className="navbar-item">
            <Link to="/support" className={location.pathname === "/support" || location.pathname === "/donate" ? "selected" : ""}>Support</Link>

          </div>

          <div className="navbar-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "selected" : ""}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

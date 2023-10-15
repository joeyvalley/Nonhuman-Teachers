import { forwardRef, useState, useEffect } from "react";
import "../styles/style.css";

const Navbar = forwardRef((props, ref) => {
  const [selectedLink, setSelectedLink] = useState();



  useEffect(() => {
    setSelectedLink(props.currentPage)
  }, [props])



  function handleClick(link) {
    setSelectedLink(link);
  }

  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="navbar-item">
            <a href="/">Nonhuman Teachers</a>
          </div>
        </div>
        <div className="right">
          <div className="navbar-item">
            <a href="/about" className={`navbar-item ${selectedLink === "about" ? "selected" : ""}`}
              onClick={() => handleClick("about")}>About</a>
          </div>

          <div className="navbar-item">
            <a href="/projects" className={`navbar-item ${selectedLink === "projects" ? "selected" : ""}`}
              onClick={() => handleClick("about")}>Projects</a>
          </div>
          <div className="navbar-item">
            <a href="/calendar" className={`navbar-item ${selectedLink === "calendar" ? "selected" : ""}`}
              onClick={() => handleClick("calendar")}>Calendar</a>
          </div>

          <div className="navbar-item">
            <a href="/support" className={`navbar-item ${selectedLink === "support" ? "selected" : ""}`}
              onClick={() => handleClick("support")}>Support</a>
          </div>

          <div className="navbar-item">
            <a href="/contact" className={`navbar-item ${selectedLink === "contact" ? "selected" : ""}`}
              onClick={() => handleClick("contact")}>Contact</a>
          </div>
        </div>
      </div>

    </>
  );
});

export default Navbar;

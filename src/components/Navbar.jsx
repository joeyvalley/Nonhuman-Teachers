import { forwardRef, useState, useEffect } from "react";
import "../styles/style.css";

const Navbar = forwardRef((props, ref) => {
  const [selectedLink, setSelectedLink] = useState();



  useEffect(() => {
    console.log(props.currentPage);
    setSelectedLink(props.currentPage)
  }, [props])



  function handleClick(link) {
    setSelectedLink(link);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-item">
          <a href="/about" className={`navbar-item ${selectedLink === "about" ? "selected" : ""}`}
            onClick={() => handleClick("about")}>About</a>
        </div>
        <div className="navbar-item">
          <a href="/calendar" className={`navbar-item ${selectedLink === "calendar" ? "selected" : ""}`}
            onClick={() => handleClick("calendar")}>Calendar</a>
        </div>
        <div className="navbar-item">
          <a href="/donate" className={`navbar-item ${selectedLink === "donate" ? "selected" : ""}`}
            onClick={() => handleClick("donate")}>Donate</a>
        </div>

        <div className="navbar-item">
          <a href="/contact" className={`navbar-item ${selectedLink === "contact" ? "selected" : ""}`}
            onClick={() => handleClick("contact")}>Contact</a>
        </div>
      </div>
    </>
  );
});

export default Navbar;

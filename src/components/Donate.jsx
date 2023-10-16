import React from "react";
import Footer from "./Footer";

const Donate = React.forwardRef((props, ref) => {

  function handleClick() {
    window.location.href = "/donate"
  }

  return (
    <>
      <div className="section" id="donate" ref={ref}>
        <div className="copy">
          <div className="section-heading">
            <h1>Support Nonhuman Teachers</h1>
            <p>At a time when the relationship between humans and the natural world is under enormous pressure, we believe that a realignment of this relationship is an essential step in righting the direction of Spaceship Earth<span className="footnote-number">1</span> for humans and nonhumans alike.</p>
            <p>Our ability to help heal this relationship and support the artists, writers, educators, scientists, and nonhuman lifeforms working towards this shared goal depends upon your support.</p>
            <p>Your contributions allow us to produce interdisciplinary public programming, build new forms of botanical spaces, create the next generation of nature media, and continue to find nonhuman teachers.</p>
            <input type="submit" value="Donate Now" className="donate" onClick={handleClick} />
          </div>
          <div className="section-heading">
            <h1>Our Supporters</h1>
            <p>Nonhuman Teachers is a registered 501(c)(3) nonprofit organization that accepts tax-deductible donations.</p>
            <p>Our work is generously supported by:</p>
            <ul>
              <li><a href="https://cactus.store">Cactus Store</a></li>
              <li><a href="https://dimesnyc.com/">Dimes</a></li>
              <li><a href="https://johnmayer.com/">John Mayer Solo</a></li>
              <li><a href="https://www.madremezcal.com/">Madre Mezcal</a></li>
              <li><a href="https://www.nineorchard.com/">Nine Orchard</a></li>
            </ul>
            <p className="lb">--</p>
          </div>
        </div>
        <div className="footnotes">
          <div className="footnote">
            <span className="footnote-text">1.&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga saepe minima ducimus nulla minus sequi, consectetur illo odio distinctio quis culpa nemo ab? Suscipit voluptatibus quia ipsa est officiis.</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
});

export default Donate;
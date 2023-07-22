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
          <p>Nonhuman Teachers is a registered 501(c)(3) non-profit organization dedicated to new forms of ecological storytelling.<span className="footnote-number">1</span></p>
          <p>At a time when the relationship between humans and the natural world is under enormous pressure, we believe that a realignment of this relationship is an essential step in righting the direction of Spaceship Earth<span className="footnote-number">2</span> for humans and nonhumans alike.</p>
          <input type="submit" value="Donate Now" className="subscribe" onClick={handleClick} />
          <p></p>
          <ul>
            <li>Our work is generously supported by:</li>
            <li><a href="https://cactus.store">Cactus Store</a><span className="footnote-number">3</span></li>
            <li><a href="https://dimesnyc.com/">Dimes</a><span className="footnote-number">4</span></li>
            <li><a href="https://johnmayer.com/">John Mayer Solo</a><span className="footnote-number">5</span></li>
            <li><a href="https://www.madremezcal.com/">Madre Mezcal</a><span className="footnote-number">6</span></li>
            <li><a href="https://www.nyfa.org/">New York Foundation for the Arts</a></li>
            <li><a href="https://www.nineorchard.com/">Nine Orchard</a></li>
          </ul>
          <p className="lb">--</p>
        </div>
        <div className="footnotes">
          <div className="footnote">
            <span className="footnote-text">13.&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga saepe minima ducimus nulla minus sequi, consectetur illo odio distinctio quis culpa nemo ab? Suscipit voluptatibus quia ipsa est officiis.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">14.&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga saepe minima ducimus nulla minus sequi, consectetur illo odio distinctio quis culpa nemo ab? Suscipit voluptatibus quia ipsa est officiis.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">15.&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga saepe minima ducimus nulla minus sequi, consectetur illo odio distinctio quis culpa nemo ab? Suscipit voluptatibus quia ipsa est officiis.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">16.&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga saepe minima ducimus nulla minus sequi, consectetur illo odio distinctio quis culpa nemo ab? Suscipit voluptatibus quia ipsa est officiis.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">17.&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga saepe minima ducimus nulla minus sequi, consectetur illo odio distinctio quis culpa nemo ab? Suscipit voluptatibus quia ipsa est officiis.</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
});

export default Donate;
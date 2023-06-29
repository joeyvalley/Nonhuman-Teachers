import React from "react";
import Footer from "./Footer";

const Donate = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="section" id="donate" ref={ref}>
        <div className="copy">
          <p>Nonhuman Teachers is a non-profit organization dedicated to lorem ipsum tendic to blatium exerumq uuntia dis re ex entet que idenis et, at mollaborro quame nus, quidus eum, sequi opta voluptibus estia- tur.<span className="footnote-number">13</span> Qui tendic to blatium exerumq uuntia dis re ex.<span className="footnote-number">14</span></p>
          <div></div>
          <ul>
            <li>Our work is generously supported by:</li>
            <li><a href="https://dimesnyc.com/">Dimes</a><span className="footnote-number">15</span></li>
            <li><a href="https://johnmayer.com/">John Mayer Solo</a></li>
            <li><a href="https://www.madremezcal.com/">Madre Mezcal</a></li>
            <li><a href="https://www.nyfa.org/">New York Foundation for the Arts</a><span className="footnote-number">16</span></li>
            <li><a href="https://www.nineorchard.com/">Nine Orchard</a><span className="footnote-number">17</span></li>
          </ul>
          <p>--</p>
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
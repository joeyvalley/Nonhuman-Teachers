import React from "react";
import Footer from "./Footer"


const About = () => {
  return (
    <>
      <div className="section" id="about">
        <div className="copy">
          <p>Nonhuman Teachers<span className="footnote-number">1</span> aspires to be a platform for folks in our community to forge more conscious relationships with the natural world that we are all enmeshed in. Sort of like 4H for adults, but instead of raising goats and chickens, we aspire to help raise more ecologically-minded selves, operating on the premise that solidarity with nonhuman beings<span className="footnote-number">2</span> can make us better citizens of this wondrous galactic zoo that we call the ecosphere.<span className="footnote-number">3</span></p>
          <p>Nonhuman Teachers hosts a diversity of projects<span className="footnote-number">5</span>, from multidisciplinary events in collaboration with like-minded institutions to research trips to the tending of our xeric botanical garden in LA.<span className="footnote-number">6</span></p>
          <p className="lb">--</p>
        </div>
        <div className="footnotes">
          <div className="footnote">
            <span className="footnote-text">1.&emsp;The name for our non-profit comes from a note that a friend of ours, a researcher from Harvard, found scrawled in the late ecologist Peter Warshall's journal. We hope that Peter doesn't mind us borrowing it.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">2.&emsp;Who of your friends or family are the result of a flower given?</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">3.&emsp;"People forget that science developed from poetry, and they fail to take into consideration that a swing of the pendulum might beneficently unite the two at a higher level, and to mutual advantage.”</span>
          </div>
          <div className="footnote">
            <span className="footnote-text-link">4.&emsp;Peter's journal.</span>
            <img src="assets/images/warshall.png" alt="Warshall Journal" />
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
};

export default About;
import React from "react";

const About = React.forwardRef((props, ref) => {

  return (
    <div className="section" id="about" ref={ref}>
      <div className="copy">
        <p>“Ecology is about profound coexistence... Ecology is radical intimacy.”<span className="footnote-number">1</span></p>
        <p>Nonhuman Teachers aspires to be a platform for folks in our community to forge more conscious relationships with the natural world that we are all enmeshed in. Sort of like 4H for adults, but instead of raising goats and chickens, we aspire to help raise more ecologically-minded selves, operating on the premise that solidarity with nonhuman beings<span className="footnote-number">2</span> can make us better citizens of this wondrous galactic zoo that we call the ecosphere.<span className="footnote-number">3</span></p>
        <p>The name for our non-profit comes from a note that a friend of ours, a researcher from Harvard, found scrawled in the late ecologist, Peter Warshall's, journal<span className="footnote-number">4</span> after he died. A list of loosely connected thoughts:</p>
        <p className="italic">backyard biodiversity<br />start anywhere<br />learn about power<br />THC insect repellent<br />animal soul<br />FIND NONHUMAN TEACHERS</p>
        <p>We hope that Peter doesn't mind us borrowing it.</p>
        <p>--</p>
      </div>
      <div className="footnotes">
        <div className="footnote">
          <span className="footnote-text">1.&emsp;A quote by Timothy Morton.</span>
        </div>
        <div className="footnote">
          <span className="footnote-text">2.&emsp;Who of your friends or family are the result of a flower given?</span>
        </div>
        <div className="footnote">
          <span className="footnote-text">3.&emsp;"People forget that science developed from poetry, and they fail to take into consideration that a swing of the pendulum might beneficently unite the two at a higher level, and to mutual advantage.”</span>
        </div>
        <div className="footnote">
          <span className="footnote-text-link">4.&emsp;Peter's journal.</span>
          {/* <img src="assets/images/warshall.png" alt="Warshall Journal" /> */}
        </div>
      </div>
    </div >
  )
});

export default About;
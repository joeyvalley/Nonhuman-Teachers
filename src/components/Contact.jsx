import Footer from "./Footer"
import Newsletter from "./Newsletter"
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="section" id="contact">
        <div className="copy">
          <p>Nonhuman Teachers<span className="footnote-number">1-8</span><br />3209 Fletcher Drive<br />Los Angeles, CA 90065</p>
          <p>Our facilities are open during events, and at all other times by appointment only.</p>
          <p>For any inquiries regarding collaborations, partnerships, and donations,<span className="footnote-number">19</span> email us at: <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a></p>
          <p>Follow us: <a href="https://instagram.com/nonhumanteachers">@nonhumanteachers</a></p>
          <Newsletter />
          <p>--</p>
          <div className="footnotes">
            <div className="footnote">
              <span className="footnote-text">1.&emsp;Christian Herman Cummings<br />Co-Founder, Executive Director</span>
            </div>
            <div className="footnote">
              <span className="footnote-text">2.&emsp;Max Martin<br />Co-Founder, Assistant Director</span>
            </div>
            <div className="footnote">
              <span className="footnote-text">3.&emsp;Carlos Morera<br />Co-Founder, Creative Director</span>
            </div>
            <div className="footnote">
              <span className="footnote-text">4.&emsp;Sandeep Rangi<br />Fiscal Director</span>
            </div>
            <div className="footnote">
              <span className="footnote-text">5.&emsp;Joseph Valle<br />Events Manager</span>
            </div>
            <div className="footnote">
              <span className="footnote-text">6.&emsp;Melody English<br />Communications Manager</span>
            </div>
            <div className="footnote">
              <span className="footnote-text">7.&emsp;Giguel Maybach<br />Design Manager</span>
            </div>
            <div className="footnote">
              <span className="footnote-text">8.&emsp;Bill Ramirez<br />Field Manager</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Contact;
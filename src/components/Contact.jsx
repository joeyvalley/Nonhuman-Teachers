import Footer from "./Footer"
import Newsletter from "./Newsletter"
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="section" id="contact">
        <div className="copy">
          <p>For any inquiries regarding collaborations, partnerships, and donations please email us at: <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a></p>
          <p>Nonhuman Teachers<span className="footnote-number">1-8</span><br />3209 Fletcher Drive<br />Los Angeles, CA 90065</p>
          <p>Our facilities are open during events, and at all other times by appointment only.</p>
          <p>Follow us: <a href="https://instagram.com/nonhuman.teachers">@nonhumanteachers</a></p>
          <Newsletter />
          <img src="assets/images/handprint.jpg" alt="Handprint" />
          <p className="lb">--</p>
        </div>
        <div className="footnotes">
          <div className="footnote">
            <span className="footnote-text">1. Christian Herman Cummings<br /><span class="title">Co-Founder, Executive Director</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">2. Max Martin<br /><span class="title">Co-Founder, Assistant Director</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">3. Carlos Morera<br /><span class="title">Co-Founder, Creative Director</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">4. Sandeep Rangi<br /><span class="title">Fiscal Director</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">5. Joseph Valle<br /><span class="title">Events Manager, Webmaster</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">6. Melody English<br /><span class="title">Communications Manager</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">7. Miguel Gaydosh<br /><span class="title">Design Consultant</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">8. Bill Ramirez<br /><span class="title">Field Manager</span></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Contact;
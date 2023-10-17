import Footer from "./Footer"
import FootnotesLogo from './FootnotesLogo'
import Newsletter from "./Newsletter"
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="section">
        <div className="copy">
          <div className='section-heading'>
            <h1>Contact</h1>
            <img src="/assets/images/protest.png" alt="Protest" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number">[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae vitae sequi nam? Excepturi, sequi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor cupiditate aspernatur omnis ea dolorem iusto rem, cumque impedit totam pariatur debitis sed numquam recusandae delectus molestiae expedita harum animi laudantium!</p>
          </div>
          <div className="section-heading">
            <p>Be the first to hear about new events, workshops, and updates from Nonhuman Teachers.</p>
            <Newsletter />
            <p>For inquiries regarding collaborations, partnerships, and donations please email us at: <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a></p>
            {/* <p>Follow us: <a href="https://instagram.com/nonhuman.teachers">@nonhumanteachers</a></p> */}
          </div>
          <p className="lb">--</p>
        </div>
        <div className="footnotes">
          <div className="footnote heading">
            <span className="footnote-text">BOARD OF DIRECTORS</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Christian Cummings<br /><span class="title">Executive Director</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Max Martin<br /><span class="title">Treasurer</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Carlos Morera<br /><span class="title">Secretary</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Sandeep Rangi<br /><span class="title">Director</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Sarah Agudo<br /><span class="title">Director</span></span>
          </div>
          <div className="footnote heading">
            <span className="footnote-text">ADVISORY BOARD</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Evan Meyer<br /><span class="title">Botanist</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">John Mayer<br /><span class="title">Musician</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Emma Reeves<br /><span class="title">Creative Strategist</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Susan Morris<br /><span class="title">Arts & Culture Writer</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Angus Wall<br /><span class="title">Film Producer & Editor</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Sasha Markova<br /><span class="title">Writer & Creative Director</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Andy Rifkin<br /><span class="title">Real Estate Capital Partner</span></span>
          </div>
          <div className="footnote heading">
            <span className="footnote-text">STAFF</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Christian Cummings<br /><span class="title">Executive Director</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Sandeep Rangi<br /><span class="title">Accounting</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Sarah Agudo<br /><span class="title">Legal</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">William Ramirez<br /><span class="title">Gardens</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Joseph Valle<br /><span class="title">Events</span></span>
          </div>
          <div className="footnote heading">
            <span className="footnote-text">VOLUNTEERS</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Kayra Viezcas<br /><span class="title">Grant Writer</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Seth Allen<br /><span class="title">Publishing</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Emily Bernstein<br /><span class="title">Writer</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Cass Marketos<br /><span class="title">Writer & Composter</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Zachary Repko<br /><span class="title">Workshops Coordinator</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Gracia Echeverria<br /><span class="title">Bookworms</span></span>
          </div>
          <div className="footnote">
            <span className="footnote-text">Miguel Gaydosh<br /><span class="title">Designer</span></span>
          </div>
        </div>

      </div>
    </>
  )
};

export default Contact;
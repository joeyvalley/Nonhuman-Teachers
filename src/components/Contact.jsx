import Newsletter from "./Newsletter"
import Board from "./Board";

import { useState } from "react";

// Import footnotes
import Footnote from "./Footnote"
import footNotes from "../api/footnotes";

export default function Contact() {

  const [footnoteContent, setFootnoteContent] = useState([]);
  const [showFootnote, setShowFootnote] = useState(false);

  function openFootnote(footnoteNumber) {
    const footnote = footNotes.find(item => item.page === "contact" && item.number === footnoteNumber);
    setFootnoteContent(footnote);
    setShowFootnote(true);
  }

  function closeFootnote() {
    setShowFootnote(false);
  }

  return (
    <div className="section">
      <div className="copy loaded">
        <div className='section-heading'>
          <h2>Contact</h2>
          {/* <img src="/assets/images/pages/contact.jpg" alt="Cycads"
            onLoad={() => {
              setCopyLoaded(true);
            }}
          />
          <p className='img-credit'>Robonaut 2 reaches out to touch a gloved astronaut hand (Image credit: NASA)</p> */}
          <p>Stay connected!<span className="footnote-number" onMouseOver={() => openFootnote(1)} onMouseOut={closeFootnote}>[1]</span></p>
          <p>Enter your email below and be the first to hear about our latest initiatives, upcoming events, and other ways to get involved.</p>
          <Newsletter />
          <p>For inquiries regarding collaborations, partnerships, or donations,<span className="footnote-number" onMouseOver={() => openFootnote(2)} onMouseOut={closeFootnote}>[2]</span> please <a href="mailto:info@nonhumanteachers.org">email us!</a></p>
          <p>Follow us: <a href="https://instagram.com/nonhuman.teachers">@nonhumanteachers</a></p>
        </div>
        <Board></Board>

      </div >
      <div className="footnotes">
        <Footnote footnote={footnoteContent} isOpen={showFootnote}></Footnote>
      </div>
    </div >
  )
};
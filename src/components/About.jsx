import { useState } from 'react';
import footNotes from '../api/footnotes';
import Footnote from "./Footnote"


export default function About() {

  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteContent, setFootnoteContent] = useState([]);
  const [showFootnote, setShowFootnote] = useState(false);

  function openFootnote(footnoteNumber) {
    const footnote = footNotes.find(item => item.page === "about" && item.number === footnoteNumber);
    setFootnoteContent(footnote);
    setShowFootnote(true);
  }

  function closeFootnote() {
    setShowFootnote(false);
  }


  return (
    <div className="section">

      {/* Main Content */}
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className="section-heading">
          <h2>About Us</h2>
          <img src="/assets/images/pages/protest.png" alt="NHT Protest"
            onLoad={() => {
              setCopyLoaded(true);
            }}
          />
          <p className='img-credit'>Earth Day protests in New York City, April 22, 1970 (Image credit: Jason Laure)</p>
          <p>Nonhuman Teachers<span className="footnote-number" onMouseOver={() => openFootnote(1)} onMouseOut={closeFootnote}>[1]</span> is a 501(c)(3) nonprofit organization that takes a new approach to ecological storytelling, blending science, art, and the imagination to help deepen the relationship between humans and the natural world.<span className="footnote-number" onMouseOver={() => openFootnote(2)} onMouseOut={closeFootnote}>[2]</span></p>
          <p>We based our mission on the observation that so many of us have fallen into a dysfunctional relationship<span className="footnote-number" onMouseOver={() => openFootnote(3)} onMouseOut={closeFootnote}>[3]</span> with the living environment, and that healing this relationship requires compelling new ways of envisioning our world that don't simply cause dread and avoidance, or beauty and delusion, but that address the complexities of our time in ways that inspire and empower us to keep going.</p>
          <p>Moreover, we need new voices.<span className="footnote-number" onMouseOver={() => openFootnote(4)} onMouseOut={closeFootnote}>[4]</span> Not just science voices, but artists, poets, dog walkers, air traffic controllers, rivers, lichens, rats and trees. The scope and urgency of our planetary moment suggests that we need everyone and not just the specialized few.</p>
          <p>Through our multidisciplinary public programming<span className="footnote-number" onMouseOver={() => openFootnote(5)} onMouseOut={closeFootnote}>[5]</span>,  immersive botanical spaces<span className="footnote-number" onMouseOver={() => openFootnote(6)} onMouseOut={closeFootnote}>[6]</span>, and new nature media<span className="footnote-number" onMouseOver={() => openFootnote(7)} onMouseOut={closeFootnote}>[7]</span>, we aim to ignite a sense of wonder about our rapidly changing Earth, not only to make us better citizens of this place but to help us imagine it differently.</p>
        </div>
      </div>

      <div className="footnotes">
        <Footnote footnote={footnoteContent} isOpen={showFootnote}></Footnote>
      </div>
    </div >
  )
};
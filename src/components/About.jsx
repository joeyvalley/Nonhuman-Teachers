import { useState } from 'react';
import footNotes from '../api/footnotes';
import Footnote from "./Footnote"


export default function About() {

  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteContent, setFootnoteContent] = useState([]);
  const [showFootnote, setShowFootnote] = useState(false);

  function openFootnote(footnoteNumber) {
    const footnote = footNotes.find(item => item.page === "about" && item.number === footnoteNumber);

    // Check if the clicked footnote is already open
    if (showFootnote && footnoteContent.number === footnoteNumber) {
      setShowFootnote(false);
    } else {
      setShowFootnote(false);
      setTimeout(() => {
        setFootnoteContent(footnote);
        setShowFootnote(true);
      }, 300);
    }
  }



  return (
    <div className="section">

      {/* Main Content */}
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className="section-heading">
          <h2>Our Mission</h2>
          <p>Nonhuman Teachers<span className="footnote-number" onClick={() => openFootnote(1)} >[1]</span> is a 501(c)(3) nonprofit organization that takes a new approach to ecological storytelling, blending science, art, and the imagination to help deepen the relationship between humans and the natural world.</p>
          <p>Through our multidisciplinary public programming<span className="footnote-number" onClick={() => openFootnote(4)} >[4]</span>,  immersive botanical spaces<span className="footnote-number" onClick={() => openFootnote(5)} >[5]</span>, and new nature media<span className="footnote-number" onClick={() => openFootnote(6)} >[6]</span>, we aim to ignite a sense of wonder about our rapidly changing Earth, not only to make us better citizens of this place but to help us imagine it differently.</p>
          <img src="/assets/images/pages/protest.png" alt="NHT Protest"
            onLoad={() => {
              setCopyLoaded(true);
            }}
          />
          <p className='img-credit'>Earth Day protests in New York City, April 22, 1970 (Image credit: Jason Laure)</p>
        </div>
        <div className="section-heading">
          <h2>New Stories</h2>
          <p>We based our mission on the observation that so many of us have fallen into a dysfunctional relationship<span className="footnote-number" onClick={() => openFootnote(2)} >[2]</span> with the living environment, and that healing this relationship requires compelling new ways of envisioning our world that don't simply cause dread and avoidance, or beauty and delusion, but that address the complexities of our time in ways that inspire and empower us to keep going.</p>
        </div>
        <div className="section-heading">
          <h2>New Voices</h2>
          {/* <img src="https://res.cloudinary.com/dnld1cqvy/image/upload/v1699388908/NHT%20Images/New_Voices_nbi1tm.jpg" alt="New Voices" />
          <p className='img-credit'>Earth Day protests in New York City, April 22, 1970 (Image credit: Jason Laure)</p> */}
          <p>Moreover, we need new voices.<span className="footnote-number" onClick={() => openFootnote(3)} >[3]</span> Not just science voices, but artists, poets, dog walkers, air traffic controllers, rivers, lichens, rats and trees. The scope and urgency of our planetary moment suggests that we need everyone and not just the specialized few.</p>
        </div>
      </div>

      <div className="footnotes">
        <h1>References</h1>
        {/* {showFootnote ? "" : <span className="footnote-text">fuck</span>} */}
        <Footnote footnote={footnoteContent} isOpen={showFootnote}></Footnote>
      </div>
    </div >
  )
};
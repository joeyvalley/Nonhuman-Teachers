import { useEffect, useState } from 'react';
import footNotes from '../api/footnotes';
import Footnote from "../components/Footnote"
import Footer from '../components/Footer'
import CopyFooter from '../components/CopyFooter';


export default function About() {

  const defaultFootnote = { page: 'about', number: 0, content: '"The engineers of the future will be poets."<br /><br /><span class="footnote-italic">Terence McKenna, author</span>', type: 'text', caption: '' };
  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteContent, setFootnoteContent] = useState(defaultFootnote);
  const [showFootnote, setShowFootnote] = useState(true);
  const [footnoteShowing, setFootnoteShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopyLoaded(true)
    }, 500);
  }, [])

  function openFootnote(footnoteNumber) {
    let footnote = footNotes.find(item => item.page === "about" && item.number === footnoteNumber);
    setShowFootnote(false);
    // If you're clicking on the same footnote while it's already open, only applicable to the desktop view
    if (showFootnote && footnoteContent.number === footnoteNumber) {
      setTimeout(() => {
        setFootnoteContent(defaultFootnote);
        setShowFootnote(true);
      }, 300);
    }

    else {
      setTimeout(() => {
        setFootnoteContent(footnote);
        setShowFootnote(true);
      }, 300);
    }
    checkForMobile();
  }

  function checkForMobile() {

    if (!footnoteShowing) {
      setFootnoteShowing(true);
    }
    else {
      setFootnoteShowing(false)
    }
  }

  return (
    <div className="section">

      {/* Main Content */}
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className="section-heading">
          <h2>Our Mission</h2>
          <p>Nonhuman Teachers<span className="footnote-number" onClick={() => openFootnote(1)} >[1]</span> is a 501(c)(3) nonprofit organization that takes a new approach to ecological storytelling, blending science, art, and the imagination to help deepen the relationship between humans and the natural world.</p>
          {/* <br /> */}
          <p>Through our multidisciplinary public programming<span className="footnote-number" onClick={() => openFootnote(2)} >[2]</span>,  immersive botanical spaces<span className="footnote-number" onClick={() => openFootnote(3)} >[3]</span>, and new nature media<span className="footnote-number" onClick={() => openFootnote(4)} >[4]</span>, we aim to ignite a sense of wonder about our rapidly changing Earth, not only to make us better citizens of this place but to help us imagine it differently.</p>
        </div>
        <div className="img-heading">
          <img src="https://res.cloudinary.com/dd5bgygfp/image/upload/v1702590563/images/our_mission_cjkoj8.jpg" alt="NHT Protest" onClick={() => openFootnote(7)} />
        </div>
        <div className="section-heading">
          <h2>New Stories</h2>
          <p>We based our mission on the observation that so many of us have fallen into a dysfunctional relationship<span className="footnote-number" onClick={() => openFootnote(5)} >[5]</span> with the living environment, and that healing this relationship requires compelling new ways of envisioning our world that don't simply cause dread and avoidance, or beauty and delusion, but that address the complexities of our time in ways that inspire and empower us to keep going.</p>
        </div>
        <div className="img-heading">
          <img src="https://res.cloudinary.com/dd5bgygfp/image/upload/v1702590563/images/new_stories_cohddh.jpg" alt="Susan Orlean" onClick={() => openFootnote(8)} />
        </div>
        <div className="section-heading">
          <h2>New Voices</h2>
          <p>Moreover, we need new voices.<span className="footnote-number" onClick={() => openFootnote(6)} >[6]</span> Not just science voices, but artists, poets, dog walkers, air traffic controllers, rivers, lichens, rats and trees. The scope and urgency of our planetary moment suggests that we need everyone and not just the specialized few.</p>
        </div>
        <div className="img-heading">
          <img src="https://res.cloudinary.com/dd5bgygfp/image/upload/v1702590563/images/new_voices_pwnbsb.jpg" alt="William Padilla Brown" onClick={() => openFootnote(9)} />
        </div>
        <CopyFooter></CopyFooter>
      </div>
      <div className={`footnotes-container ${copyLoaded ? 'loaded' : ''} ${footnoteShowing ? 'visible' : ''}`}>
        <div className="footnotes">
          <div className="footnotes-header">
            <h1>References</h1>
            <span className='footnotes-close' onClick={() => {
              setFootnoteShowing(false);
              setTimeout(() => {
                setFootnoteContent(defaultFootnote);
              }, 500)
            }}>Close</span>
          </div>
          <Footnote footnote={footnoteContent} isOpen={showFootnote}></Footnote>
          <Footer></Footer>
        </div>
      </div>
    </div >
  )
};
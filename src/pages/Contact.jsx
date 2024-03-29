import Newsletter from "../components/Newsletter"
import Board from "../components/Board";
import Footer from "../components/Footer";
import CopyFooter from "../components/CopyFooter";

import { useEffect, useState } from "react";

// Import footnotes
import Footnote from "../components/Footnote"
import footNotes from "../api/footnotes";

export default function Contact() {

  const defaultFootnote = { page: 'contact', number: 0, content: '"It is in the quiet whisper of the forest and the serene ripple of the stream that we find our truest selves."<br /><br /><span class="footnote-italic">GPT-4, multimodal large language model</span>', type: 'text', caption: '' };
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
    let footnote = footNotes.find(item => item.page === "contact" && item.number === footnoteNumber);
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
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className='section-heading'>
          <h2>Mailing List</h2>
          {/* <img src="/assets/images/pages/contact.jpg" alt="Cycads"
            onLoad={() => {
              setCopyLoaded(true);
            }}
          />
          <p className='img-credit'>Robonaut 2 reaches out to touch a gloved astronaut hand (Image credit: NASA)</p> */}
          <p>Stay connected!<span className="footnote-number" onClick={() => openFootnote(1)}>[1]</span></p>
          <p>Enter your email below and be the first to hear about our latest initiatives, upcoming events, and other ways to get involved.</p>
          <Newsletter />
        </div>
        <Board></Board>
        <CopyFooter></CopyFooter>
      </div >
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
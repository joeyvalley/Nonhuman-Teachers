import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import CopyFooter from "../components/CopyFooter";
import Footer from "../components/Footer";
import Footnote from "../components/Footnote";
import footNotes from "../api/footnotes";

export default function Support() {
  const defaultFootnote = { page: 'support', number: 0, content: '"The stories we tell literally make the world. If you want to change the world, you need to change the story."<br /><br /><span class="footnote-italic">Michael Margolis, anthropologist</span>', type: 'text', caption: '' };
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
    let footnote = footNotes.find(item => item.page === "support" && item.number === footnoteNumber);
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

  const navigation = useNavigate();
  function handleDonate() {
    navigation('/donate');
  }


  return (
    <div className="section">

      {/* Main Content */}
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className="section-heading">
          <h2>Support Nonhuman Teachers</h2>
          <p>At a time when the relationship between humans and the natural world is under enormous pressure, a new approach is urgently needed!<span className="footnote-number" onClick={() => openFootnote(1)}>[1]</span> A more inclusive approach that involves new stories and new voices.</p>
          <p>Nonhuman Teachers is dedicated to facilitating this shift, but we need your help to do it. We feel strongly that mending this strained relationship is the first step toward righting the course of Spaceship Earth.<span className="footnote-number" onClick={() => openFootnote(2)}>[2]</span></p>
          <p>Your contributions go to support NHT's interdisciplinary programming, immersive botanical spaces, and new nature media projects.</p>
          <p>Help us do something truly bigger than ourselves!<span className="footnote-number" onClick={() => openFootnote(3)}>[3]</span></p>
          <input type="submit" value="Donate" className="donate" onClick={handleDonate} />
        </div>
        {/* <div className="section-heading">
          <h2>Volunteer</h2>
          <p>If you're passionate about finding new and creative solutions to the many problems we face as passengers of Spaceship Earth, we encourage you to join us!</p>
          <p>Please <a href="mailto:info@nonhumanteachers.org">email us</a> if you'd like to learn more about opportunities to contribute to our mission and help shape our species us into better stewards of this ever-changing planet, we'd love to meet you!</p>
        </div> */}
        <div className="img-heading">
          <img src="https://res.cloudinary.com/dd5bgygfp/image/upload/v1702590709/images/nht-group-photo_whrdtx.jpg" alt="Human Teachers" onClick={() => openFootnote(4)} />
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
    </div>
  )
}
import { useEffect, useRef, useState } from "react"
import { useNavigate } from 'react-router-dom';

import FootnotesLogo from './FootnotesLogo';

export default function Support() {
  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteLoaded, setFootnoteLoaded] = useState(false);

  const footnotes = useRef(null);
  const prevFootnoteRef = useRef(0);
  const [footnotesLogo, setFootnotesLogo] = useState(false);
  const [activeFootnote, setActiveFootnote] = useState(null);

  // Show or hide logo in footnotes container depending on if there is overflow.
  useEffect(() => {
    setCopyLoaded(true);
    setFootnoteLoaded(true);
    const handleResize = () => {
      setTimeout(() => {
        if (footnotes.current.scrollHeight > footnotes.current.clientHeight) {
          setFootnotesLogo(true);
        } else {
          setFootnotesLogo(false);
        }
      }, 100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Select and deselect footnotes on click.
  function footnoteClick(id) {
    if (prevFootnoteRef.current === id) {
      setActiveFootnote(0);
    }
    else {
      setActiveFootnote(id);
      prevFootnoteRef.current = id;
    }
  }


  const navigation = useNavigate();
  function handleDonate() {
    navigation('/donate');;
  }

  return (
    <div className="section">

      {/* Main Content */}
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className="section-heading">
          <h2>Support Nonhuman Teachers</h2>
          <p>At a time when the relationship between humans and the natural world is under enormous pressure, a new approach is urgently needed! A more inclusive approach that involves new stories and new voices. Nonhuman Teachers is dedicated to facilitating this shift, but we need your help to do it! We feel strongly that mending this strained relationship is the first step toward righting the course of Spaceship Earth.</p>
          <p>Your contributions allow us to produce interdisciplinary public programming, build immersive botanical spaces, create the next generation of nature media, and much more.</p>
          <p>Help us do something truly bigger than ourselves!</p>
          <input type="submit" value="Donate" className="donate" onClick={handleDonate} />
        </div>

      </div>

      {/* Footnotes */}
      <div className={`footnotes ${footnoteLoaded ? 'loaded' : ''}`} ref={footnotes}>
        <div className="footnote">
          <span className="footnote-text">1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga saepe minima ducimus nulla minus sequi, consectetur illo odio distinctio quis culpa nemo ab? Suscipit voluptatibus quia ipsa est officiis.</span>
        </div>
        {footnotesLogo ? <FootnotesLogo /> : null}
      </div>
    </div>
  )
}
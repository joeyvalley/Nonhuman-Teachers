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
          <input type="submit" value="Donate Now" className="donate" onClick={handleDonate} />
        </div>
        <div className="section-heading">
          <div className="board-container">
            <div className="board-group">
              <h2>Board of Directors</h2>
            </div>
            <div className="board-group">
              <div>
                <h3>Christian Cummings</h3>
                <p>Executive Director</p>
              </div>
              <div>
                <h3>Max Martin</h3>
                <p>Treasurer</p>
              </div>
              <div>
                <h3>Carlos Morera</h3>
                <p>Secretary</p>
              </div>
              <div>
                <h3>Sandeep Rangi</h3>
                <p>Director</p>
              </div>
              <div>
                <h3>Sarah Agudo</h3>
                <p>Director</p>
              </div>
            </div>
            <div className="board-group">
              <h2>Advisory Board</h2>
            </div>
            <div className="board-group">
              <div>
                <h3>Evan Meyer</h3>
                <p>Botanist</p>
              </div>
              <div>
                <h3>Li Murphy</h3>
                <p>Entemologist</p>
              </div>
              <div>
                <h3>John Mayer</h3>
                <p>Musician</p>
              </div>
              <div>
                <h3>Emma Reeves</h3>
                <p>Creative Strategist</p>
              </div>
              <div>
                <h3>Susan Morris</h3>
                <p>Arts & Culture Writer</p>
              </div>
              <div>
                <h3>Angus Wall</h3>
                <p>Film Producer & Editor</p>
              </div>
              <div>
                <h3>Sasha Markova</h3>
                <p>Writer & Creative Director</p>
              </div>
            </div>
            <div className="board-group">
              <h2>Staff</h2>
            </div>
            <div className="board-group">
              <div>
                <h3>Christian Cummings</h3>
                <p>Executive Director</p>
              </div>
              <div>
                <h3>Sandeep Rangi</h3>
                <p>Accountant</p>
              </div>
              <div>
                <h3>Sarah Agudo</h3>
                <p>Legal</p>
              </div>
              <div>
                <h3>William Ramirez</h3>
                <p>Greenhouse Manager</p>
              </div>
              <div>
                <h3>Joseph Valle</h3>
                <p>Events Coordinator</p>
              </div>
            </div>
          </div>
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
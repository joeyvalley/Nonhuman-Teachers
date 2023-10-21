import { useEffect, useRef, useState } from "react"
import { useNavigate } from 'react-router-dom';

import FootnotesLogo from './FootnotesLogo';

export default function Donate() {
  const [copyLoaded, setCopyLoaded] = useState(true);
  const [footnoteLoaded, setFootnoteLoaded] = useState(true);

  const footnotes = useRef(null);
  const prevFootnoteRef = useRef(0);
  const [footnotesLogo, setFootnotesLogo] = useState(false);
  const [activeFootnote, setActiveFootnote] = useState(null);

  // Show or hide logo in footnotes container depending on if there is overflow.
  useEffect(() => {
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
          <h1>Support Nonhuman Teachers</h1>
          <p>At a time when the relationship between humans and the natural world is under enormous pressure, we believe that a realignment of this relationship is an essential step in righting the direction of Spaceship Earth<span className="footnote-number" onClick={() => footnoteClick(1)}>[1]</span> for humans and nonhumans alike.</p>
          <p>Our ability to help heal this relationship and support the artists, writers, educators, scientists, and nonhuman lifeforms working towards this shared goal depends upon your support.</p>
          <p>Your contributions allow us to produce interdisciplinary public programming, build new forms of botanical spaces, create the next generation of nature media, and continue to find nonhuman teachers.</p>
          <input type="submit" value="Donate Now" className="donate" onClick={handleDonate} />
        </div>
        <div className="section-heading">
          <h1>Our Supporters</h1>
          <p>Nonhuman Teachers is a registered 501(c)(3) nonprofit organization that accepts tax-deductible donations.</p>
          <p>Our work is generously supported by:</p>
          <ul>
            <li><a href="https://cactus.store">Cactus Store</a></li>
            <li><a href="https://dimesnyc.com/">Dimes</a></li>
            <li><a href="https://johnmayer.com/">John Mayer Solo</a></li>
            <li><a href="https://www.madremezcal.com/">Madre Mezcal</a></li>
            <li><a href="https://www.nineorchard.com/">Nine Orchard</a></li>
          </ul>
          <p className="lb">--</p>
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
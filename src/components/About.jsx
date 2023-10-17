import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import { gsap } from 'gsap';

import Footer from "./Footer"
import FootnotesLogo from './FootnotesLogo';
import Newsletter from './Newsletter';


const About = () => {
  const footnotes = useRef(null);
  const prevFootnoteRef = useRef(0);
  const [footnotesLogo, setFootnotesLogo] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState(null);
  const [activeFootnote, setActiveFootnote] = useState(null);

  const container = document.querySelector('.footnotes');
  const marginTop = "1rem";

  useEffect(() => {
    setTimeout(() => {
      if (footnotes.current.scrollHeight > footnotes.current.clientHeight) {
        // console.log(footnotes.current.scrollHeight, footnotes.current.clientHeight);
        setFootnotesLogo(true);
      } else {
        // console.log(footnotes.current.scrollHeight, footnotes.current.clientHeight);
        setFootnotesLogo(false);
      }
    }, 100);

  }, []);

  function handleClick() {
    window.location.href = "/donate"
  }

  function handleOpenModal(imageUrl) {
    setModalImageUrl(imageUrl);
  };
  function handleCloseModal() {
    gsap.to('.modal', {
      opacity: 0, duration: 0.5, onComplete: () => {
        setModalImageUrl(null);
      }
    });
  }

  function footnoteClick(id) {
    if (prevFootnoteRef.current === id) {
      setActiveFootnote(0);
    }
    else {
      setActiveFootnote(id);
      prevFootnoteRef.current = id;
    }

    // Find the div with the corresponding ID
    const footnoteDetail = document.getElementById(`${id}`);

    // Scroll the div to the top of its container
    if (footnoteDetail) {
      footnoteDetail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }


  return (
    <>
      <div className="section" id="about">
        <div className="copy">
          <div className="section-heading">
            <h1>About</h1>
            <img src="/assets/images/protest.png" alt="NHT Protest" />
            <p className='img-credit'>Image description / credit</p>
            <p>Nonhuman Teachers<span className="footnote-number" onClick={() => footnoteClick(1)}>[1]</span> takes a new approach to ecological storytelling, blending science, art, and the imagination to help deepen the relationship between humans and the natural world.<span className="footnote-number" onClick={() => footnoteClick(2)}>[2]</span></p>
            <p>Through multidisciplinary experiential programming<span className="footnote-number" onClick={() => footnoteClick(3)}>[3]</span>, new nature media<span className="footnote-number" onClick={() => footnoteClick(4)}>[4]</span>, and immersive botanical spaces<span className="footnote-number" onClick={() => footnoteClick(5)}>[5]</span>, we aim to ignite a sense of wonder about our rapidly changing Earth, not only to make us better citizens of this place but to help folks imagine it differently.</p>
          </div>
          <div className='section-heading'>
            <h1>Support</h1>
            <p>Nonhuman Teachers is a registered 501(c)(3) nonprofit organization that accepts tax-deductible donations.</p>
            <p>Your contributions allow us to produce interdisciplinary public programming, build new forms of botanical spaces, create the next generation of nature media, and continue to find nonhuman teachers.</p>
            <input type="submit" value="Donate Now" className="donate" onClick={handleClick} />
          </div>
          <div className='section-heading'>
            <h1>Contact</h1>
            <p>Be the first to hear about new events, workshops, and updates from Nonhuman Teachers.</p>
            <Newsletter />
            <p>For inquiries regarding collaborations, partnerships, and donations please email us at: <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a></p>
          </div>
          <p className="lb">--</p>
        </div>
        <div className="footnotes" ref={footnotes}>
          <div className="footnote" id="1">
            <span className={`footnote-text ${activeFootnote === 1 ? 'active' : ''}`} id="1">1. Our name comes from a passage found scrawled in the lecture notes of the late ecologist, Peter Warshall. We hope he doesn't mind us borrowing it.</span>
          </div>
          <div className="footnote">
            <span className={`footnote-text ${activeFootnote === 2 ? 'active' : ''}`} id="2">2. The first step toward healing this relationship is with new kinds of stories and new ways of telling them. We need compelling new ways of envisioning the natural world that don't simply cause dread and avoidance or beauty and delusion but that address the complexities of our time in ways that inspire us to keep going, to keep fighting.</span>
          </div>
          <div className="footnote">
            <span className={`footnote-text ${activeFootnote === 3 ? 'active' : ''}`} id="3">3. Connecting with the natural world should be a social endeavor. Our multidisciplinary events offer artful ways of engaging with and learning about the natural world while also fostering a deep sense of community.</span>
          </div>
          <div className="footnote">
            <span className={`footnote-text ${activeFootnote === 4 ? 'active' : ''}`} id="4">4. We believe that an innovative and updated approach to how science and the natural world are represented in media is long overdue. One that resonates with a broader audience while bringing a new generation of viewers into the conversation. Taking advantage of the full scope of today's media tools, we want to broadcast our signal far and wide.</span>
          </div>
          <div className="footnote">
            <span className={`footnote-text ${activeFootnote === 5 ? 'active' : ''}`} id="5">5. Our immersive botanical spaces are experiments in what the evolution of a botanical garden can look like; unlikely urban oases of rare and unusual plants, community hubs for science, education, and experimentation.</span>
          </div>
          {footnotesLogo ? <FootnotesLogo /> : null}
        </div>
      </div >
      <Footer />
      {
        modalImageUrl && (
          <Modal imageUrl={modalImageUrl} onClose={handleCloseModal} />
        )
      }
    </>
  )
};

export default About;
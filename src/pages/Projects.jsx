import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import CopyFooter from "../components/CopyFooter";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footnote from "../components/Footnote"
import footNotes from "../api/footnotes";


export default function Project() {
  // Set up states for content visibilty.
  const defaultFootnote = { page: 'projects', number: 0, content: `"The world is now dominated by an animal that doesn't think it's an animal"<br /><br /><span class="footnote-italic">Melanie Challenger, author</span>`, type: 'text', caption: '' };

  const [footnoteContent, setFootnoteContent] = useState(defaultFootnote);
  const [showFootnote, setShowFootnote] = useState(true);
  const [footnoteShowing, setFootnoteShowing] = useState(false);

  function openFootnote(footnoteNumber) {
    setShowFootnote(false);
    let footnote = footNotes.find(item => item.page === "projects" && item.number === footnoteNumber);
    if (showFootnote && footnoteContent.number === footnoteNumber) {
      setTimeout(() => {
        setFootnoteContent(defaultFootnote);
        setShowFootnote(true);
      }, 300);
    } else {
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

  const [copyLoaded, setCopyLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCopyLoaded(true)
    }, 500);
  }, [])


  // Set up image carousels.
  const projectSlider = useRef(null);
  const botanicalSlider = useRef(null);
  const mediaSlider = useRef(null);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const eventsImages = [
    "https://05ec48578e12534030.temporary.link/nht/events/sonny-workshop.jpg",
    "https://05ec48578e12534030.temporary.link/nht/events/garden.jpg",
    "https://05ec48578e12534030.temporary.link/nht/events/hortculture-nyc.jpg",
    "https://05ec48578e12534030.temporary.link/nht/events/laraaji-nyc.jpg",
    "https://05ec48578e12534030.temporary.link/nht/events/liquid-light.jpg",
    "https://05ec48578e12534030.temporary.link/nht/events/events.jpg",
    "https://05ec48578e12534030.temporary.link/nht/events/wires.jpg"
  ];

  const botanicalImages = [
    "https://05ec48578e12534030.temporary.link/nht/botanical/santa-monica.jpg",
    "https://05ec48578e12534030.temporary.link/nht/botanical/greenhouse.jpg",
    "https://05ec48578e12534030.temporary.link/nht/botanical/erlandson.jpg",
    "https://05ec48578e12534030.temporary.link/nht/botanical/rowley.jpg",
    "https://05ec48578e12534030.temporary.link/nht/botanical/nyc-greenhouse.jpg",
    "https://05ec48578e12534030.temporary.link/nht/botanical/future.jpg",
    "https://05ec48578e12534030.temporary.link/nht/botanical/botanical.jpg",
    "https://05ec48578e12534030.temporary.link/nht/botanical/lilly-pad.jpg"
  ];

  const mediaImages = [
    "https://05ec48578e12534030.temporary.link/nht/media/cycad-fog.jpg",
    "https://05ec48578e12534030.temporary.link/nht/media/cactus.jpg",
    "https://05ec48578e12534030.temporary.link/nht/media/mead.jpg",
    "https://05ec48578e12534030.temporary.link/nht/media/travel.jpg",
    "https://05ec48578e12534030.temporary.link/nht/media/cycad-mic.jpg",
    "https://05ec48578e12534030.temporary.link/nht/media/watermelons.jpg",

  ];

  return (
    <>
      <div id="projects-container" className="section">
        <div id="projects-content" className={`copy ${copyLoaded ? 'loaded' : ''}`}>
          <div id="public-programming" className="section-heading">
            <div className="event">
              <h2>Public Programming</h2>
              <p>Our multidisciplinary events in LA and NYC<span className="footnote-number" onClick={() => openFootnote(1)}>[1]</span> include lectures, workshops, book and plant clubs, movie screenings, and all kinds of performances.<span className="footnote-number" onClick={() => openFootnote(2)}>[2]</span> We feel strongly that connecting with the natural world should be a social and inclusive endeavor.</p>
              <Slider {...settings} ref={projectSlider}>
                {eventsImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Events ${index}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div id="botanical-spaces" className="section-heading">
            <div className="event">
              <h2>Immersive Botanical Spaces</h2>
              <p>These are experiments in what the evolution of a botanical garden can look like;<span className="footnote-number" onClick={() => openFootnote(3)}>[3]</span> unlikely urban oases for rare and unusual plants that are also hubs for citizen science, education, experimentation, and community. Every plant, just like every human, comes with a story. Learning these stories can have a transformative effect on people, changing a green leafy thing into a fully realized being worthy of human care and compassion.<span className="footnote-number" onClick={() => openFootnote(4)}>[4]</span></p>
              <Slider {...settings} ref={botanicalSlider}>
                {botanicalImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Botanical Spaces ${index}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div id="new-media" className="section-heading">
            <div className="event">
              <h2><a href="projects/media">New Nature Media</a></h2>
              <p>We believe that an updated approach to how science and the natural world are represented in media is long overdue. One that tracks better with the issues of our time.<span className="footnote-number" onClick={() => openFootnote(5)}>[5]</span> Our goal with the media side of things is to tell relevant and surprising new stories<span className="footnote-number" onClick={() => openFootnote(6)}>[6]</span> about our wondrous blue marble while taking full advantage of today's media tools with the aim of broadcasting our signal far and wide.<span className="footnote-number" onClick={() => openFootnote(7)}>[7]</span></p>
              <Slider {...settings} ref={mediaSlider}>
                {mediaImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Events ${index}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <CopyFooter></CopyFooter>
        </div>

        {/* Footnotes */}
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
    </>
  );
};
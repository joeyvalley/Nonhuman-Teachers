import { useRef, useState } from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footnote from "./Footnote"
import footNotes from "../api/footnotes";

import { useNavigate } from "react-router-dom";


export default function Project() {
  // Set up states for content visibilty.
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  const defaultFootnote = { page: 'project', number: 0, content: `"The world is now dominated by an animal that doesn't think it's an animal"<br /><br />- Melanie Challenger, author`, type: 'text', caption: '' };

  const [footnoteContent, setFootnoteContent] = useState(defaultFootnote);
  const [showFootnote, setShowFootnote] = useState(true);

  function openFootnote(footnoteNumber) {
    const footnote = footNotes.find(item => item.page === "projects" && item.number === footnoteNumber);
    setShowFootnote(false);
    setTimeout(() => {
      setFootnoteContent(footnote);
      setShowFootnote(true);
    }, 300);
  }

  function closeFootnote() {
    setShowFootnote(false);
    setTimeout(() => {
      setFootnoteContent(defaultFootnote);
      setShowFootnote(true);
    }, 300);
  }

  // Set up image carousels.
  const projectSlider = useRef(null);
  const botanicalSlider = useRef(null);
  const mediaSlider = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const eventsImages = [
    'assets/images/projects/sonny-workshop.jpg',
    'assets/images/projects/laraaji-nyc.jpg',
    'assets/images/projects/hortculture-nyc2.jpg',
    'assets/images/projects/gabriel.jpg',
    'assets/images/projects/clubs.jpg',
    'assets/images/projects/events.jpg',
  ];

  const botanicalImages = [
    // 'assets/images/projects/botanical.jpg',
    // 'assets/images/projects/nyc-greenhouse.jpg',
    'assets/images/projects/greenhouse.jpg',
    'assets/images/projects/santa-monica.jpg',
  ];

  const mediaImages = [
    'assets/images/projects/cycad-fog.jpg',
    'assets/images/projects/podcast.jpg',
    'assets/images/projects/cycad-mic.jpg',
    'assets/images/projects/travel.jpg',
  ];

  function handleImageClick(ref) {
    ref.current.slickNext(); // go to the next slide
  }

  const navigate = useNavigate();
  function handleEasterEgg() {
    navigate('/projects/trip-report')
  }

  return (
    <>
      <div id="projects-container" className="section">
        <div id="projects-content" className={`copy ${loadedImagesCount === (eventsImages.length + botanicalImages.length) ? 'loaded' : ''}`}>
          <div id="public-programming" className="section-heading">
            <div className="event">
              <h2>Public Programming</h2>
              <p>Our multidisciplinary events in LA and NYC<span className="footnote-number" onMouseOver={() => openFootnote(1)} onMouseOut={closeFootnote}>[1]</span> include lectures, workshops, book and plant clubs, movie screenings, and all kinds of performances.<span className="footnote-number" onMouseOver={() => openFootnote(2)} onMouseOut={closeFootnote}>[2]</span> We feel strongly that connecting with the natural world should be a social and inclusive endeavor.</p>
              <Slider {...settings} ref={projectSlider}>
                {eventsImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Events ${index}`} onClick={() => handleImageClick(projectSlider)} className="carousel-image" onLoad={() => {
                      setLoadedImagesCount(prevCount => prevCount + 1);
                    }} />
                  </div>
                ))}
              </Slider>
              {/* <a href="/projects/programming-and-events"><span className="project-button">More Information</span></a> */}
            </div>
          </div>
          <div id="botanical-spaces" className="section-heading">
            <div className="event">
              <h2>Immersive Botanical Spaces</h2>
              <p>These are experiments in what the evolution of a botanical garden can look like;<span className="footnote-number" onMouseOver={() => openFootnote(3)} onMouseOut={closeFootnote}>[3]</span> unlikely urban oases for rare and unusual plants that are also hubs for citizen science, education, experimentation, and community. Every plant, just like every human, comes with a story. Learning these stories can have a transformative effect on people, changing a green leafy thing into a fully realized being worthy of human care and compassion.<span className="footnote-number" onMouseOver={() => openFootnote(4)} onMouseOut={closeFootnote}>[4]</span></p>
              <Slider {...settings} ref={botanicalSlider}>
                {botanicalImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Botanical Spaces ${index}`} onClick={() => handleImageClick(botanicalSlider)} className="carousel-image" onLoad={() => {
                      setLoadedImagesCount(prevCount => prevCount + 1);
                    }} />
                  </div>
                ))}
              </Slider>
              {/* <a href="/projects/botanical-spaces"><span className="project-button">More Information</span></a> */}
            </div>
          </div>
          <div id="new-media" className="section-heading">
            <div className="event">
              <h2><a href="projects/media">New Nature Media</a></h2>
              <p>We believe that an updated approach to how science and the natural world are represented in media is long overdue. One that tracks better with the issues of our time.<span className="footnote-number" onMouseOver={() => openFootnote(5)} onMouseOut={closeFootnote}>[5]</span> Our goal with the media side of things is to tell relevant and surprising <span onClick={() => handleEasterEgg()}>new stories</span> about our wondrous blue marble while taking full advantage of today's media tools with the aim of broadcasting our signal far and wide.</p>
              <Slider {...settings} ref={mediaSlider}>
                {mediaImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Events ${index}`} onClick={() => handleImageClick(mediaSlider)} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="footnotes">
          <h1>References</h1>
          {/* {showFootnote ? "" : <span className="footnote-text">fuck</span>} */}
          <Footnote footnote={footnoteContent} isOpen={showFootnote}></Footnote>
        </div>
      </div >
    </>
  );
};
import { useRef, useState } from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FootnotesLogo from "../components/FootnotesLogo"

export default function Project() {
  // Set up states for content visibilty.
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  // Set up footnote interaction capabilities.
  const footnotes = useRef(null);
  const prevFootnoteRef = useRef(0);
  const [footnotesLogo, setFootnotesLogo] = useState(false);
  const [activeFootnote, setActiveFootnote] = useState(null);

  function footnoteClick(id) {
    if (prevFootnoteRef.current === id) {
      setActiveFootnote(0);
    }
    else {
      setActiveFootnote(id);
      prevFootnoteRef.current = id;
    }

    const footnoteDetail = document.getElementById(`${id}`);
    if (footnoteDetail) {
      footnoteDetail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
    // 'assets/images/projects/laraaji-nyc.jpg',
    'assets/images/projects/hortculture-nyc2.jpg',
    // 'assets/images/projects/gabriel.jpg',
    // 'assets/images/projects/clubs.jpg',
    // 'assets/images/projects/events.jpg',
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

  return (
    <>
      {/* {!(loadedImagesCount > 0 && loadedImagesCount === (eventsImages.length + botanicalImages.length)) ?
        <div className='loading'>
          <img src="/assets/beetle-worship.png" alt="Loading" />
        </div>
        : ''} */}
      <div id="projects-container" className="section">

        {/* Main content */}
        <div id="projects-content" className={`copy ${loadedImagesCount === (eventsImages.length + botanicalImages.length) ? 'loaded' : ''}`}>
          <div id="public-programming" className="section-heading">
            <div className="event">
              <h2>Public Programming</h2>
              <p>Our multidisciplinary events in LA and NYC include lectures, workshops, book and plant clubs, movie screenings, and all kinds of performances. We feel strongly that connecting with the natural world should be a social and inclusive endeavor.</p>
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
              <p>These are experiments in what the evolution of a botanical garden can look like; unlikely urban oases for rare and unusual plants, that are also hubs for citizen science, education, experimentation, and community. Every plant, just like every human, comes with a story. Learning these stories can have a transformative effect on people, changing a green leafy “thing” into a fully realized “being” worthy of human care and compassion.</p>
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
              <p>We believe that an updated approach to how science and the natural world are represented in media is long overdue. One that tracks better with the issues of our time. Our goal with the media side of things is to tell relevant and surprising stories about our wondrous blue marble while taking full advantage of today's media tools, in effort to broadcast our signal far and wide.</p>
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
        <div id="projects-footnotes" className={`footnotes ${loadedImagesCount === (eventsImages.length + botanicalImages.length) ? 'loaded' : ''}`} ref={footnotes}>
          <div className="footnote" id="1">
            <span className={`footnote-text ${activeFootnote === 1 ? 'active' : ''}`} id="1">1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tempore laborum quibusdam. Aperiam sed, eos quibusdam nam pariatur ad, fugit ea, odit voluptas voluptates ut. Excepturi fugit ea quam officiis.</span>
          </div>
          {footnotesLogo ? <FootnotesLogo /> : null}
        </div>
      </div >
    </>
  );
};
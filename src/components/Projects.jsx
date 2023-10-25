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
    'assets/images/events.jpg',
    'assets/images/botanical.jpg',
    'assets/images/clubs.jpg',
    'assets/images/travel.jpg',
    'assets/images/future.jpg'
  ];

  const botanicalImages = [
    'assets/images/botanical.jpg',
    'assets/images/clubs.jpg',
    'assets/images/travel.jpg',
    'assets/images/future.jpg',
    'assets/images/events.jpg'
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
      <div className="section">

        {/* Main content */}
        <div className={`copy ${loadedImagesCount === (eventsImages.length + botanicalImages.length) ? 'loaded' : ''}`}>
          <div className='section-heading'>
            <h1>Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa cumque inventore quos quia est iure explicabo sed sunt labore. Ipsum error veritatis laudantium architecto, quos sint accusamus quo quas.</p>
          </div>
          <div className="section-heading">
            <div className="event">
              <h2><a href="projects/programming-and-events">Public Programming</a></h2>
              <p>Connecting with the natural world should be a collective and social endeavor.</p>
              <p>Our multidisciplinary events offer artful ways of engaging with and learning about the natural world while also fostering a deep sense of community. These include lectures, workshops, book and plant clubs, movie screenings, and all manner of performances.</p>
              <Slider {...settings} ref={projectSlider}>
                {eventsImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Events ${index}`} onClick={() => handleImageClick(projectSlider)} className="carousel-image" onLoad={() => {
                      setLoadedImagesCount(prevCount => prevCount + 1);
                    }} />
                  </div>
                ))}
              </Slider>
              <a href="/projects/programming-and-events"><span className="project-button">More Information</span></a>
            </div>
          </div>
          <div className="section-heading">
            <div className="event">
              <h2><a href="projects/botanical-spaces">New Botanical Spaces</a></h2>
              <p>Botanical gardens have existed since at least the 16th century and they've never been radically rethought.</p>
              <p>Our immersive botanical spaces are experiments in what the evolution of a botanical garden can look like; unlikely urban oases of rare and unusual plants, hubs for citizen science, education, experimentation and community.</p>
              <Slider {...settings} ref={botanicalSlider}>
                {botanicalImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Botanical Spaces ${index}`} onClick={() => handleImageClick(botanicalSlider)} className="carousel-image" onLoad={() => {
                      setLoadedImagesCount(prevCount => prevCount + 1);
                    }} />
                  </div>
                ))}
              </Slider>
              <a href="/projects/botanical-spaces"><span className="project-button">More Information</span></a>
            </div>
          </div>
          <div className="section-heading">
            <div className="event">
              <h2><a href="projects/media">New Nature Media</a></h2>
              <p>We believe that an innovative and updated approach to how science and the natural world are represented in media is long overdue. One that resonates with a broader audience while bringing a new generation of viewers into the conversation. Taking advantage of the full scope of today's media tools, we want to broadcast our signal far and wide.</p>
              <img src="assets/images/travel.jpg" alt="Travel" className="carousel-image" />
              <a href="/projects/media"><span className="project-button">More Information</span></a>
            </div>
            <p className="lb">--</p>
          </div>
        </div>

        {/* Footnotes */}
        <div className={`footnotes ${loadedImagesCount === (eventsImages.length + botanicalImages.length) ? 'loaded' : ''}`} ref={footnotes}>
          <div className="footnote" id="1">
            <span className={`footnote-text ${activeFootnote === 1 ? 'active' : ''}`} id="1">1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tempore laborum quibusdam. Aperiam sed, eos quibusdam nam pariatur ad, fugit ea, odit voluptas voluptates ut. Excepturi fugit ea quam officiis.</span>
          </div>
          {footnotesLogo ? <FootnotesLogo /> : null}
        </div>
      </div >
    </>
  );
};
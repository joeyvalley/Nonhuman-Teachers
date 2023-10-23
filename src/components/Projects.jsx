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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number" onClick={() => footnoteClick(1)}>[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae vitae sequi nam? Excepturi, sequi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor cupiditate aspernatur omnis ea dolorem iusto rem, cumque impedit totam pariatur debitis sed numquam recusandae delectus molestiae expedita harum animi laudantium!</p>
          </div>
          <div className="section-heading">
            <div className="event">
              <h2><a href="projects/programming-and-events">Public Programming</a></h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam id labore exercitationem explicabo a quae eveniet, nostrum mollitia repellendus ad ut quasi beatae! Delectus reprehenderit nisi cupiditate cum perferendis ipsum?</p>
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
              <h2><a href="projects/groups-and-workshops">Community Groups & Workshops</a></h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora, libero excepturi eaque cumque corrupti laudantium architecto explicabo dolorum blanditiis quaerat voluptatibus incidunt commodi quisquam nesciunt praesentium! Alias, voluptates eum.</p>
              <img src="assets/images/clubs.jpg" alt="Clubs" className="carousel-image" />
              <a href="/projects/groups-and-workshops"><span className="project-button">More Information</span></a>
            </div>
          </div>
          <div className="section-heading">
            <div className="event">
              <h2><a href="projects/botanical-spaces">New Botanical Spaces</a></h2>
              <p>Our immersive botanical spaces are experiments in what the evolution of a botanical garden can look like; unlikely urban oases of rare and unusual plants, community hubs for science, education, and experimentation.</p>
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
              <p>We believe that an innovative and updated approach to how science and the natural world are represented in media is long overdue. Taking advantage of the full scope of today's media tools, we want to broadcast our signal far and wide and bring a new generation of viewers into the conversation.</p>
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
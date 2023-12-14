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
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593297/images/sonny-workshop_gffmeb.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593294/images/garden_pxzgxb.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593295/images/hortculture-nyc_lyvfph.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593295/images/laraaji-nyc_ohr3lf.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593296/images/liquid-light_ikx9l2.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593295/images/events_i9wvsx.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593298/images/wires_r2jkbp.jpg"
  ];

  const botanicalImages = [
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593903/images/santa-monica_o5hjts.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593900/images/greenhouse_xfiiy7.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593897/images/erlandson_pejogf.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593902/images/rowley_xlmqgx.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593904/images/nyc-greenhouse_e93jzy.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593898/images/future_r3mmjq.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593899/images/botanical_mrnfeq.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593901/images/lilly-pad_bqpjzp.jpg",
  ];

  const mediaImages = [
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593706/images/cycad-fog_kzk1oe.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593705/images/cactus_vhoj5d.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593706/images/mead_xc7acu.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593709/images/travel_wri2fm.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593709/images/podcast_asxwwx.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593706/images/cycad-mic_hkjkqw.jpg",
    "hhttps://res.cloudinary.com/dd5bgygfp/image/upload/v1702593812/images/cycad-cones_qxkkwh.jpg",
    "https://res.cloudinary.com/dd5bgygfp/image/upload/v1702593709/images/watermelons_mvv36d.jpg"

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
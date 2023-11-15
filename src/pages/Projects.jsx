import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import CopyFooter from "../components/CopyFooter";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footnote from "../components/Footnote"
import footNotes from "../api/footnotes";

import { useNavigate } from "react-router-dom";


export default function Project() {
  // Set up states for content visibilty.
  const defaultFootnote = { page: 'project', number: 0, content: `"The world is now dominated by an animal that doesn't think it's an animal"<br /><br /><span class="footnote-italic">Melanie Challenger, author</span>`, type: 'text', caption: '' };

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
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997071/NHT%20Images/Public%20Programming/sonny-workshop_bsxnoc.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997038/NHT%20Images/Public%20Programming/garden_g7pkay.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997057/NHT%20Images/Public%20Programming/hortculture-nyc_pp55df.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997061/NHT%20Images/Public%20Programming/laraaji-nyc_dpum2x.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699998970/NHT%20Images/Public%20Programming/liquid-light_zfpolu.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997090/NHT%20Images/Public%20Programming/events_s1xjjp.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699999072/NHT%20Images/Public%20Programming/wires_xxx8mo.jpg"
  ];

  const botanicalImages = [
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699998065/NHT%20Images/Botanical%20Spaces/santa-monica_p4lr0v.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699998262/NHT%20Images/Botanical%20Spaces/greenhouse_unkdc5.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699998244/NHT%20Images/Botanical%20Spaces/erlandson_hay4cg.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699998063/NHT%20Images/Botanical%20Spaces/rowley_gdrcd8.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699998054/NHT%20Images/Botanical%20Spaces/nyc-greenhouse_egovzx.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699998042/NHT%20Images/Botanical%20Spaces/future_dcbjei.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699998004/NHT%20Images/Botanical%20Spaces/botanical_pkz5bk.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997999/NHT%20Images/Botanical%20Spaces/lilly-pad_fkbnxz.jpg",
    // "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997998/NHT%20Images/Botanical%20Spaces/billy_qbtaiv.jpg"
  ];

  const mediaImages = [
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997211/NHT%20Images/New%20Nature%20Media/cycad-fog_unoknp.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997954/NHT%20Images/New%20Nature%20Media/cactus_bxvadu.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997948/NHT%20Images/New%20Nature%20Media/mead_x1wrkw.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997234/NHT%20Images/New%20Nature%20Media/travel_qwxwzh.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997226/NHT%20Images/New%20Nature%20Media/podcast_qhhwtd.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997213/NHT%20Images/New%20Nature%20Media/cycad-mic_rvum8h.jpg",

    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997209/NHT%20Images/New%20Nature%20Media/cycad-cones_bxrrq2.jpg",
    "https://res.cloudinary.com/dnld1cqvy/image/upload/v1699997201/NHT%20Images/New%20Nature%20Media/watermelons_lbyjbf.jpg"

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
              <p>We believe that an updated approach to how science and the natural world are represented in media is long overdue. One that tracks better with the issues of our time.<span className="footnote-number" onClick={() => openFootnote(5)}>[5]</span> Our goal with the media side of things is to tell relevant and surprising <span onClick={() => handleEasterEgg()}>new stories</span> about our wondrous blue marble while taking full advantage of today's media tools with the aim of broadcasting our signal far and wide.<span className="footnote-number" onClick={() => openFootnote(6)}>[6]</span></p>
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
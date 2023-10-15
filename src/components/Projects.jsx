import { forwardRef, useRef } from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer"
import FootnotesLogo from "../components/FootnotesLogo"

const Projects = forwardRef((props, ref) => {

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
      <div className="section" id="projects" ref={ref}>
        <div className="copy">
          <div className='section-heading'>
            <img src="/assets/images/protest.png" alt="Protest" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number">[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae vitae sequi nam? Excepturi, sequi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor cupiditate aspernatur omnis ea dolorem iusto rem, cumque impedit totam pariatur debitis sed numquam recusandae delectus molestiae expedita harum animi laudantium!</p>
          </div>
          <div className="event">
            <h1><a href="projects/programming-and-events">Public Programming</a></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam id labore exercitationem explicabo a quae eveniet, nostrum mollitia repellendus ad ut quasi beatae! Delectus reprehenderit nisi cupiditate cum perferendis ipsum?</p>
            <Slider {...settings} ref={projectSlider}>
              {eventsImages.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Events ${index}`} onClick={() => handleImageClick(projectSlider)} className="carousel-image" />
                </div>
              ))}
            </Slider>
            <a href="/projects/programming-and-events"><span className="project-button">More Information</span></a>
          </div>

          <div className="event">
            <h1><a href="projects/groups-and-workshops">Community Groups & Workshops</a></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora, libero excepturi eaque cumque corrupti laudantium architecto explicabo dolorum blanditiis quaerat voluptatibus incidunt commodi quisquam nesciunt praesentium! Alias, voluptates eum.</p>
            <img src="assets/images/clubs.jpg" alt="Clubs" className="carousel-image" />
            <a href="/projects/groups-and-workshops"><span className="project-button">More Information</span></a>
          </div>

          <div className="event">
            <h1><a href="projects/botanical-spaces">New Botanical Spaces</a></h1>
            <p>Our immersive botanical spaces are experiments in what the evolution of a botanical garden can look like; unlikely urban oases of rare and unusual plants, community hubs for science, education, and experimentation.</p>
            <Slider {...settings} ref={botanicalSlider}>
              {botanicalImages.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Botanical Spaces ${index}`} onClick={() => handleImageClick(botanicalSlider)} className="carousel-image" />
                </div>
              ))}
            </Slider>
            <a href="/projects/botanical-spaces"><span className="project-button">More Information</span></a>
          </div>

          <div className="event">
            <h1><a href="projects/media">New Nature Media</a></h1>
            <p>We believe that an innovative and updated approach to how science and the natural world are represented in media is long overdue. Taking advantage of the full scope of today's media tools, we want to broadcast our signal far and wide and bring a new generation of viewers into the conversation.</p>
            <img src="assets/images/travel.jpg" alt="Travel" className="carousel-image" />
            <a href="/projects/media"><span className="project-button">More Information</span></a>
          </div>

          <p className="lb">--</p>

        </div>

        <div className="footnotes">
          <div className="footnote">
            <span className="footnote-text-link">1.&emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui a blanditiis reiciendis beatae illo provident mollitia sapiente, voluptatem iure expedita officiis minima repellat dolores laborum maiores molestiae veniam eaque cum.</span>
          </div>
          <FootnotesLogo></FootnotesLogo>
        </div>
      </div >
      <Footer />
    </>
  );
});

export default Projects;
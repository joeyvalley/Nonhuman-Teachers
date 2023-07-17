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
          <p>Nonhuman Teachers hosts a diversity of projects<span className="footnote-number">5</span>, from multidisciplinary events in collaboration with like-minded institutions to research trips to the tending of our xeric botanical garden in LA.<span className="footnote-number">6</span></p>
          <div className="event">
            <h1>Programming & Events</h1>
            <Slider {...settings} ref={projectSlider}>
              {eventsImages.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Events ${index}`} onClick={() => handleImageClick(projectSlider)} className="carousel-image" />
                </div>
              ))}
            </Slider>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam id labore exercitationem explicabo a quae eveniet, nostrum mollitia repellendus ad ut quasi beatae! Delectus reprehenderit nisi cupiditate cum perferendis ipsum?</p>
            <a href="/projects/programming-and-events"><span className="project-button">More Information</span></a>
          </div>

          <div className="event">
            <h1>Botanical Spaces</h1>
            <Slider {...settings} ref={botanicalSlider}>
              {botanicalImages.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Botanical Spaces ${index}`} onClick={() => handleImageClick(botanicalSlider)} className="carousel-image" />
                </div>
              ))}
            </Slider>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nesciunt vero itaque possimus ipsum eius asperiores, quisquam quasi rem accusamus debitis, consequuntur soluta dolorum odio sequi maiores ratione exercitationem facere.</p>
            <a href="/projects/botanical-spaces"><span className="project-button">More Information</span></a>
          </div>

          <div className="event">
            <h1>Clubs & Societies</h1>
            <img src="assets/images/clubs.jpg" alt="Clubs" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora, libero excepturi eaque cumque corrupti laudantium architecto explicabo dolorum blanditiis quaerat voluptatibus incidunt commodi quisquam nesciunt praesentium! Alias, voluptates eum.</p>
            <a href="/projects/clubs-and-societies"><span className="project-button">More Information</span></a>

          </div>
          <div className="event">
            <h1>Research & Travel</h1>
            <img src="assets/images/travel.jpg" alt="Travel" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis inventore laborum dolor dolore explicabo velit, recusandae quibusdam quis iste. Repellendus consectetur nulla consequuntur ad ipsum in quia labore at quis?</p>
            <a href="/projects/research-and-travel"><span className="project-button">More Information</span></a>
          </div>

          <div className="event">
            <h1>The Future</h1>
            <img src="assets/images/future.jpg" alt="Future" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolore neque cupiditate labore, perspiciatis, odit exercitationem optio ipsa dolores, enim laborum illum sit maxime minus. Iure aspernatur quos perferendis id?</p>
            <a href="/projects/the-future"><span className="project-button">More Information</span></a>
          </div>

          <p className="lb">--</p>

        </div>

        <div className="footnotes">
          <div className="footnote">
            <span className="footnote-text-link">5.&emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui a blanditiis reiciendis beatae illo provident mollitia sapiente, voluptatem iure expedita officiis minima repellat dolores laborum maiores molestiae veniam eaque cum.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text-link">6.&emsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quis corrupti aliquid officia amet accusamus numquam debitis placeat hic, labore consequatur magni enim quidem eveniet sint odit libero soluta facere.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text-link">7.&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit rerum inventore, molestiae, nobis aut beatae officia alias animi eum est molestias pariatur officiis eius, natus cumque temporibus veritatis atque.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text-link">8.&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa maxime maiores cumque tenetur natus itaque, quae totam at tempora quisquam sit praesentium libero consectetur, qui explicabo! Ipsa eum porro sit?</span>
          </div>
          <div className="footnote">
            <span className="footnote-text-link">9.&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora vitae quisquam dignissimos, iusto soluta dicta laborum ducimus necessitatibus qui quaerat facilis nobis modi fuga pariatur odit labore quo eos itaque?</span>
          </div>
          <div className="footnote">
            <span className="footnote-text-link">10.&emsp;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ut debitis fugiat nemo, molestiae maiores aspernatur nesciunt incidunt in esse! Sit consequatur iusto eos debitis aliquid esse autem, modi nobis.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text-link">11.&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus itaque quasi velit adipisci, voluptates dolorem blanditiis tempora natus ad molestias quisquam atque qui neque numquam rem ea obcaecati odio!</span>
          </div>
          <div className="footnote">
            <span className="footnote-text-link">12.&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus fugit qui quod, quae, itaque, omnis praesentium nemo vero asperiores animi consequatur aperiam sed dolorem rerum pariatur ipsam eveniet doloremque.</span>
          </div>
          <FootnotesLogo></FootnotesLogo>
        </div>
      </div >
      <Footer />
    </>
  );
});

export default Projects;
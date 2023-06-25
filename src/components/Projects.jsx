import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div className="section" id="projects" ref={ref}>
      <div className="copy">
        <p>Nonhuman Teachers hosts a diversity of projects<span className="footnote-number">5</span>, from multidisciplinary events in collaboration with like-minded institutions to research trips to the tending of our xeric botanical garden in LA.<span className="footnote-number">6</span></p>
        <div className="projects">
          <div className="projects-left">
            <div className="project">
              <p className="project-title">Events<span className="footnote-number">7</span></p>
              <img src="assets/images/events.jpg" alt="Events" />
            </div>
            <div className="project">
              <p className="project-title">Plant Orphans<span className="footnote-number">9</span></p>
              <img src="assets/images/greenhouse.jpg" alt="Plant Orphans" />
            </div>
            <div className="project">
              <p className="project-title">LESCSS<span className="footnote-number">11</span></p>
              <img src="assets/images/lescss.jpg" alt="LESCSS" />
            </div>
          </div>
          <div className="projects-right">
            <div className="project">
              <p className="project-title">Earthworms<span className="footnote-number">8</span></p>
              <img src="assets/images/earthworms.jpg" alt="Earthworms" />
            </div>
            <div className="project">
              <p className="project-title">Travel<span className="footnote-number">10</span></p>
              <img src="assets/images/travel.jpg" alt="Travel" />
            </div>
            <div className="project">
              <p className="project-title">The Future<span className="footnote-number">12</span></p>
              <img src="assets/images/future.jpg" alt="Future" />
            </div>
          </div>
        </div>
        <p>--</p>
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
      </div>
    </div>
  );
});

export default Projects;
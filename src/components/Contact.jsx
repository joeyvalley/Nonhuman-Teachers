import Newsletter from "./Newsletter"
import { useState } from "react";

export default function Contact() {
  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteLoaded, setFootnoteLoaded] = useState(false);

  return (
    <div className="section">
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className='section-heading'>
          <h2>Contact</h2>
          <img src="/assets/images/pages/contact.jpg" alt="Cycads"
            onLoad={() => {
              setCopyLoaded(true);
              setTimeout(() => {
                setFootnoteLoaded(true);
              }, 500);
            }}
          />
          {/* <p className='img-credit'>Robonaut 2 reaches out to touch a gloved astronaut hand (Image credit: NASA)</p> */}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number">[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae vitae sequi nam? Excepturi, sequi.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor cupiditate aspernatur omnis ea dolorem iusto rem, cumque impedit totam pariatur debitis sed numquam recusandae delectus molestiae expedita harum animi laudantium!</p>
          <h2>Newsletter</h2>
          <p>Be the first to hear about new events, workshops, and updates from Nonhuman Teachers.</p>
          {/* <Newsletter /> */}
          <p>For inquiries regarding collaborations, partnerships, and donations please email us: <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a></p>
          {/* <p>Follow us: <a href="https://instagram.com/nonhuman.teachers">@nonhumanteachers</a></p> */}
        </div>
      </div>
      <div className={`footnotes ${footnoteLoaded ? 'loaded' : ''}`}>
        <div className="footnote">
          <span className="footnote-text">1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni cumque quasi, ex unde error, repellendus adipisci corrupti quaerat eveniet ut. Consequuntur est quia porro impedit, nesciunt aspernatur a odit.</span>
        </div>
      </div>

    </div>
  )
};
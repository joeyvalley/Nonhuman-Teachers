import Newsletter from "./Newsletter"
import { useState } from "react";

export default function Contact() {
  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteLoaded, setFootnoteLoaded] = useState(false);

  return (
    <div className="section">
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className='section-heading'>
          <h1>Contact</h1>
          <img src="/assets/images/protest.png" alt="Protest"
            onLoad={() => {
              setCopyLoaded(true);
              setTimeout(() => {
                setFootnoteLoaded(true);
              }, 500);
            }}
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number">[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae vitae sequi nam? Excepturi, sequi.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor cupiditate aspernatur omnis ea dolorem iusto rem, cumque impedit totam pariatur debitis sed numquam recusandae delectus molestiae expedita harum animi laudantium!</p>
        </div>
        <div className="section-heading">
          <p>Be the first to hear about new events, workshops, and updates from Nonhuman Teachers.</p>
          <Newsletter />
          <p>For inquiries regarding collaborations, partnerships, and donations please email us at: <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a></p>
          {/* <p>Follow us: <a href="https://instagram.com/nonhuman.teachers">@nonhumanteachers</a></p> */}
        </div>
        <p className="lb">--</p>
      </div>
      <div className={`footnotes ${footnoteLoaded ? 'loaded' : ''}`}>
        <div className="footnote">
          <span className="footnote-text">1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni cumque quasi, ex unde error, repellendus adipisci corrupti quaerat eveniet ut. Consequuntur est quia porro impedit, nesciunt aspernatur a odit.</span>
        </div>
      </div>

    </div>
  )
};
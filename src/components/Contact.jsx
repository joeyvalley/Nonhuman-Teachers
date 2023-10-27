import Newsletter from "./Newsletter"
import Board from "./Board";
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
          <p className='img-credit'>Robonaut 2 reaches out to touch a gloved astronaut hand (Image credit: NASA)</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, in delectus. Ipsum laboriosam ipsa iure illo laborum, cupiditate sed, alias nemo aut pariatur corporis temporibus molestiae corrupti odit earum ex!</p>
          <Newsletter />
          <p>For any and all inquiries regarding collaborations, partnerships, donations please email us at <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a>.</p>
          <p>If you're out there on the social web and just want to be friends or say hi, please follow us <a href="https://instagram.com/nonhuman.teachers">@nonhumanteachers</a></p>
          {/* <h2>Mailing List</h2> */}
        </div>
        <Board></Board>
      </div >
      <div className={`footnotes ${footnoteLoaded ? 'loaded' : ''}`}>
        <div className="footnote">
          <span className="footnote-text">1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni cumque quasi, ex unde error, repellendus adipisci corrupti quaerat eveniet ut. Consequuntur est quia porro impedit, nesciunt aspernatur a odit.</span>
        </div>
      </div>

    </div >
  )
};
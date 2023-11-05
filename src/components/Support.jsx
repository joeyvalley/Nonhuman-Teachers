import { useState } from "react"
import { useNavigate } from 'react-router-dom';


export default function Support() {
  const [copyLoaded, setCopyLoaded] = useState(false);

  const navigation = useNavigate();
  function handleDonate() {
    navigation('/donate');;
  }

  return (
    <div className="section">

      {/* Main Content */}
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className="section-heading">
          <h2>Support Nonhuman Teachers</h2>
          <img src="https://res.cloudinary.com/dnld1cqvy/image/upload/v1699207156/NHT%20Images/human-teachers_subolf.jpg" alt="Human Teachers"
            onLoad={() => {
              setCopyLoaded(true);
            }}
          />
          <p className='img-credit'>Some of the humans of Nonhuman Teachers (Image credit: Nonhuman Teachers)</p>
          <p>At a time when the relationship between humans and the natural world is under enormous pressure, a new approach is urgently needed! A more inclusive approach that involves new stories and new voices. Nonhuman Teachers is dedicated to facilitating this shift, but we need your help to do it! We feel strongly that mending this strained relationship is the first step toward righting the course of Spaceship Earth.</p>
          <p>Your contributions go to support NHT's interdisciplinary programming, immersive botanical spaces, and new nature media projects.</p>
          <p>Help us do something truly bigger than ourselves!</p>
          <input type="submit" value="Donate" className="donate" onClick={handleDonate} />
        </div>
        <div className="section-heading">
          <h2>Volunteer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem nemo voluptates ullam accusamus deserunt eaque, dolores, ad quae aut provident earum officia excepturi numquam blanditiis vel veritatis, atque corporis.</p>
          <p>Please <a href="mailto:info@nonhumanteachers.org">email us</a> for more information, we'd love to meet you!</p>
        </div>
      </div>
    </div>
  )
}
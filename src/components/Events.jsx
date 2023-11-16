import { useEffect, useRef, useState } from "react";
import authenticate from "../api/getEvents"
import FootnotesLogo from "./FootnotesLogo";

export default function Events() {

  // Handle dynamically loading images with the Eventbrite API
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const workAround = async () => {
      const eventsData = await authenticate();
      setUpcomingEvents(eventsData[0]);
      setPastEvents(eventsData[1].reverse().slice(0, 5));
    };
    workAround();
  }, [])

  // Setup and handle footnote functionality.
  const footnotes = useRef(null);
  const prevFootnoteRef = useRef(0);
  const [footnotesLogo, setFootnotesLogo] = useState(false);
  const [activeFootnote, setActiveFootnote] = useState(null);

  function footnoteClick(id) {
    console.log(prevFootnoteRef);
    if (prevFootnoteRef.current === id) {
      setActiveFootnote(0);
      prevFootnoteRef.current = 0;
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

  const [upcomingImagesCount, setUpcomingImagesCount] = useState(0);
  const [upcomingImagesLoaded, setUpcomingImagesLoaded] = useState(false);

  const handleUpcomingLoad = () => {
    setUpcomingImagesCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === upcomingEvents.length) {
        setUpcomingImagesLoaded(true);
      }
      return newCount;
    });
  };

  const [pastImagesCount, setPastImagesCount] = useState(0);
  const [pastImagesLoaded, setPastImagesLoaded] = useState(false);

  const handlePastLoad = () => {
    setPastImagesCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === pastEvents.length) {
        setPastImagesLoaded(true);
      }
      return newCount;
    });
  };

  return (
    <div className="section">
      {/* Main content. */}
      <div className="copy loaded">
        <div className='section-heading'>
          <h2>Calendar</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number" onClick={() => footnoteClick(1)}>[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae vitae sequi nam? Excepturi, sequi.</p>
        </div>

        {/* Upcoming Events */}
        <div className={`calendar-section ${upcomingImagesLoaded ? 'show-content' : ''}`}>
          <h2>Upcoming Events</h2>
          {upcomingImagesLoaded ?
            null :
            <div className="loading">
              <img src="assets/spinner.gif" alt="Loading" />
            </div>
          }
          {upcomingEvents ? upcomingEvents.map((event, index) => (
            <div className="calendar-event" key={index}>
              <div className="event">
                <a href={event.url}>
                  <img src={event.image} alt="Event" onLoad={handleUpcomingLoad} />
                </a>
                <span className="event-title">{event.title}</span>
                <span className="event-date">{event.date}, {event.time}</span>
                <a href={event.url}><span className="event-link">Tickets and more info</span></a>
              </div>
            </div>
          )) : (
            <div>
              <p>No upcoming events. Please check back soon!</p>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div className={`calendar-section ${pastImagesLoaded ? 'show-content' : ''}`}>
          <h2>Past Events</h2>
          {pastImagesLoaded ?
            null :
            <div className="loading">
              <img src="assets/spinner.gif" alt="Loading" />
            </div>
          }
          {pastEvents ? pastEvents.map((event, index) => (
            <div className="calendar-event" key={index}>
              <div className="event">
                {/* <a href={event.url}> */}
                <img src={event.image} alt="Event" onLoad={handlePastLoad} />
                {/* </a> */}
                <span className="event-title">{event.title}</span>
                <span className="event-date">{event.date}, {event.time}</span>
                {/* <a href={event.url}><span className="event-link">More information</span></a> */}
              </div>
            </div>
          )) : (
            <div>
              <p>Whoops, I'm not sure what's going on. Please check back soon!</p>
            </div>
          )}
        </div>


      </div>

      {/* Footnotes */}
      <div className={`footnotes ${upcomingImagesLoaded ? 'loaded' : ''}`} ref={footnotes}>
        <div className="footnote" id="1">
          <span className={`footnote-text ${activeFootnote === 1 ? 'active' : ''}`} id="1">1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius unde veniam incidunt distinctio a facere quidem porro, quod consectetur dicta debitis impedit fugiat nostrum? Enim natus ducimus provident fugit.</span>
        </div>
        {footnotesLogo ? <FootnotesLogo /> : null}
      </div>
    </div >
  )
};
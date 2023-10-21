import { useEffect, useRef, useState } from "react";
import authenticate from "./getEvents.js"
import FootnotesLogo from "./FootnotesLogo";

export default function Events() {

  // Set up states for content visibilty.
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [copyLoaded, setCopyLoaded] = useState(false);



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


  useEffect(() => {
    if (loadedImagesCount > 0 && loadedImagesCount === (upcomingEvents.length + pastEvents.length)) {
      setCopyLoaded(true);
      console.log("images are loaded");
    }
  }, [loadedImagesCount, upcomingEvents.length, pastEvents.length]);

  return (
    <>
      {/* {!copyLoaded ?
        <div className='loading'>
          <img src="/assets/beetle-worship.png" alt="Loading" />
        </div>
        : ''} */}
      <div className="section">

        {/* Main content. */}

        <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
          <div className='section-heading'>
            <h1>Calendar</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number" onClick={() => footnoteClick(1)}>[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae vitae sequi nam? Excepturi, sequi.</p>
          </div>

          {/* Upcoming Events */}
          <div className="section-heading">
            <h1>Upcoming Events</h1>
          </div>
          {upcomingEvents ? upcomingEvents.map((event, index) => (
            <div className="section-heading" key={index}>
              <div className="event">
                <a href={event.url}>
                  <img src={event.image} alt="Event" onLoad={() => {
                    setLoadedImagesCount(prevCount => prevCount + 1);
                    console.log("image loaded");
                  }} />
                </a>
                <span>{event.title}</span>
                <span className="event-date">{event.date}, {event.time}</span>
                <a href={event.url}><span className="event-link">Tickets and more info</span></a>
              </div>
            </div>
          )) : null}

          {/* Past Events */}
          <div className="section-heading">
            <h1>Past Events</h1>
          </div>
          {pastEvents ? pastEvents.map((event, index) => (
            <div className="section-heading" key={index}>
              <div className="event" >
                <a href={event.url}>
                  <img src={event.image} alt="Event" onLoad={() => {
                    setLoadedImagesCount(prevCount => prevCount + 1);
                    console.log("image loaded");
                  }} />
                </a>
                <span>{event.title}</span>
                <span className="event-date">{event.date}, {event.time}</span>
                <a href={event.url}><span className="event-link">More info</span></a>
              </div>
            </div>
          )) : null}
          <p className="lb">--</p>
        </div>

        {/* Footnotes */}
        <div className={`footnotes ${copyLoaded ? 'loaded' : ''}`} ref={footnotes}>
          <div className="footnote" id="1">
            <span className={`footnote-text ${activeFootnote === 1 ? 'active' : ''}`} id="1">1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius unde veniam incidunt distinctio a facere quidem porro, quod consectetur dicta debitis impedit fugiat nostrum? Enim natus ducimus provident fugit.</span>
          </div>
          {footnotesLogo ? <FootnotesLogo /> : null}
        </div>
      </div >
    </>
  )
};
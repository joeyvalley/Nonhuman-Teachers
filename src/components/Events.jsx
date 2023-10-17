import { useEffect, useRef, useState } from "react";
import authenticate from "./getEvents.js"
import FootnotesLogo from "./FootnotesLogo";

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState();
  const [pastEvents, setPastEvents] = useState();

  useEffect(() => {
    const workAround = async () => {
      const eventsData = await authenticate();
      setUpcomingEvents(eventsData[0]);
      setPastEvents(eventsData[1].reverse().slice(0, 5));
    };
    workAround();
  }, [])

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

  return (
    <>
      <div className="section" id="calendar">
        <div className="copy">
          <div className='section-heading'>
            <h1>Calendar</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number" onClick={() => footnoteClick(1)}>[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae vitae sequi nam? Excepturi, sequi.</p>
          </div>
          <div className="section-heading">
            <h1>Upcoming Events</h1>
          </div>
          {upcomingEvents ? upcomingEvents.map((event, index) => (
            <div className="section-heading" key={index}>
              <div className="event">
                <a href={event.url}><img src={event.image} alt="Event" /></a>
                <span>{event.title}</span>
                <span className="event-date">{event.date}, {event.time}</span>
                <a href={event.url}><span className="event-link">Tickets and more info</span></a>
              </div>
            </div>
          )) : null}
          <div className="section-heading">
            <h1>Past Events</h1>
          </div>
          {pastEvents ? pastEvents.map((event, index) => (
            <div className="section-heading" key={index}>
              <div className="event" >
                <a href={event.url}><img src={event.image} alt="Event" /></a>
                <span>{event.title}</span>
                <span className="event-date">{event.date}, {event.time}</span>
                <a href={event.url}><span className="event-link">More info</span></a>
              </div>
            </div>
          )) : null}
          <p className="lb">--</p>
        </div>
        <div className="footnotes" ref={footnotes}>
          <div className="footnote" id="1">
            <span className={`footnote-text ${activeFootnote === 1 ? 'active' : ''}`} id="1">1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius unde veniam incidunt distinctio a facere quidem porro, quod consectetur dicta debitis impedit fugiat nostrum? Enim natus ducimus provident fugit.</span>
          </div>
          {footnotesLogo ? <FootnotesLogo /> : null}
        </div>
      </div >
    </>
  )
};

export default Events;
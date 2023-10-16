import { useEffect, useState } from "react";
import authenticate from "./getEvents.js"
import Footer from "./Footer";
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



  return (
    <>
      <div className="section" id="calendar">
        <div className="copy">
          <div className='section-heading'>
            <h1>Calendar of Events</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatibus quas nihil<span className="footnote-number">[1]</span> sit ea, quod earum veritatis, nemo soluta fugit explicabo recusandae ratione molestiae<span className="footnote-number">2</span> vitae sequi nam? Excepturi, sequi.</p>
          </div>
          <div className="section-heading">
            <h1>Upcoming</h1>
            {upcomingEvents ? upcomingEvents.map((event, index) => (
              <div className="event" key={index}>
                <a href={event.url}><img src={event.image} alt="Event" /></a>
                <span>{event.title}</span>
                <span className="event-date">{event.date}, {event.time}</span>
                <a href={event.url}><span className="event-link">Tickets and more info</span></a>
              </div>
            )) : null}
            <h1>Past Events</h1>
            {pastEvents ? pastEvents.map((event, index) => (
              <div className="event" key={index}>
                <a href={event.url}><img src={event.image} alt="Event" /></a>
                <span>{event.title}</span>
                <span className="event-date">{event.date}, {event.time}</span>
                <a href={event.url}><span className="event-link">More info</span></a>
              </div>
            )) : null}
            <p className="lb">--</p>
          </div>
        </div>
        <div className="footnotes">
          <div className="footnote">
            <span className="footnote-text">1.&emsp;We are headquartered in Los Angeles and New York, so most of our events take place in one these two cities. If you'd like to work on putting something together with us in your town, please <a href="mailto:info@nonhumanteachers.org">email us</a>.</span>
          </div>
          <div className="footnote">
            <span className="footnote-text">2.&emsp;We host a lot of events, so this is just a recent selection. See the full list <a href="https://www.eventbrite.com/o/nonhuman-teachers-62088205263">here</a>.</span>
          </div>
          <FootnotesLogo></FootnotesLogo>
        </div>
      </div >
      <Footer />
    </>
  )
};

export default Events;
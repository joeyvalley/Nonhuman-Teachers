import { useEffect, useState } from 'react';
import authenticate from '../api/getEvents';
// import footNotes from '../api/footnotes';
import Footnote from '../components/Footnote';
import Footer from '../components/Footer';
import CopyFooter from '../components/CopyFooter';

export default function Events() {
  const defaultFootnote = {
    page: 'events',
    number: 0,
    content: '"The clearest way into the Universe is through a forest wilderness."<br /><br /><span class="footnote-italic">John Muir</span>',
    type: 'text',
    caption: ''
  };

  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteContent, setFootnoteContent] = useState(defaultFootnote);
  const [showFootnote, setShowFootnote] = useState(true);
  const [footnoteShowing, setFootnoteShowing] = useState(false);

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [eventsLoaded, setEventsLoaded] = useState(false);
  const [visiblePastCount, setVisiblePastCount] = useState(5);

  useEffect(() => {
    setTimeout(() => setCopyLoaded(true), 500);
    const loadEvents = async () => {
      const [upcoming, past] = await authenticate();
      setUpcomingEvents(upcoming);
      setPastEvents(past.reverse());
      setEventsLoaded(true);
    };
    loadEvents();
    setShowFootnote(true);
  }, []);

  // function openFootnote(footnoteNumber) {
  //   const footnote = footNotes.find(item => item.page === 'events' && item.number === footnoteNumber);
  //   setShowFootnote(false);
  //   if (showFootnote && footnoteContent.number === footnoteNumber) {
  //     setTimeout(() => {
  //       setFootnoteContent(defaultFootnote);
  //       setShowFootnote(true);
  //     }, 300);
  //   } else {
  //     setTimeout(() => {
  //       setFootnoteContent(footnote);
  //       setShowFootnote(true);
  //     }, 300);
  //   }
  //   checkForMobile();
  // }

  return (
    <div className="section">

      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>

        {/* Upcoming Events */}
        <div className="section-heading">
          <h2>Upcoming Events</h2>
          {!eventsLoaded ? (
            <div className="loading">
              <img src="assets/spinner.gif" alt="Loading" />
            </div>
          ) : upcomingEvents.length ? (
            <div className="calendar-section">
              {upcomingEvents.map((event, index) => (
                <div className="calendar-event" key={index}>
                  <div className="event">
                    {event.image && (
                      <a href={event.url} target="_blank" rel="noreferrer">
                        <img src={event.image} alt={event.title} />
                      </a>
                    )}
                    <span className="event-title">{event.title}</span>
                    <br />
                    <span className="event-date">{event.date}, {event.time}</span>
                    <br />
                    <button className="tickets">Tickets</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No upcoming events. Please check back soon!</p>
          )}
        </div>

        {/* Past Events */}
        {eventsLoaded && pastEvents.length ? (
          <div className="section-heading">
            <h2>Past Events</h2>
            <div className="calendar-section">
              {pastEvents.slice(0, visiblePastCount).map((event, index) => (
                <div className="calendar-event" key={index}>
                  <div className="event">
                    {event.image && (
                      <a href={event.url} target="_blank" rel="noreferrer">
                        <img src={event.image} alt={event.title} />
                      </a>
                    )}
                    <span className="event-title-ended">{event.title}</span>
                    <br />
                    <span className="event-date-ended">{event.date}, {event.time}</span>
                  </div>
                </div>
              ))}
              {visiblePastCount < pastEvents.length && (
                <button
                  className="show-more"
                  onClick={() => setVisiblePastCount(prev => prev + 10)}
                >
                  Show More
                </button>
              )}
            </div>
          </div>
        ) : null}

        <CopyFooter />
      </div>

      {/* Footnotes */}
      <div className={`footnotes-container ${copyLoaded ? 'loaded' : ''} ${footnoteShowing ? 'visible' : ''}`}>
        <div className="footnotes">
          <div className="footnotes-header">
            <h1>References</h1>
            <span className="footnotes-close" onClick={() => {
              setFootnoteShowing(false);
              setTimeout(() => setFootnoteContent(defaultFootnote), 500);
            }}>Close</span>
          </div>
          <Footnote footnote={footnoteContent} isOpen={showFootnote} />
          <Footer />
        </div>
      </div>

    </div>
  );
}
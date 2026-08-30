import axios from "axios";

export default async function getEvents() {
  const API_KEY = process.env.REACT_APP_EVENTBRITE_KEY;

  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

  try {
    const response = await axios.get(
      'https://www.eventbriteapi.com/v3/organizations/1433796023533/events/',
      {
        params: {
          page_size: 100,
          order_by: 'start_asc',
          expand: 'logo',
        },
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        }
      }
    );

    const events = response.data.events;
    const upcoming = [];
    const past = [];

    events.forEach((event) => {
      const date = new Date(event.start.local);
      const formattedDate = date.toLocaleString('en-US', dateOptions);
      const time = date.toLocaleString('en-US', timeOptions);
      const eventData = {
        title: event.name.text,
        url: event.url,
        image: event.logo?.original?.url,
        date: formattedDate,
        time: time,
      };

      if (event.status === "live" || event.status === "started") {
        upcoming.push(eventData);
      } else if (event.status === "completed" || event.status === "ended") {
        past.push(eventData);
      }
    });

    console.log(events);

    return [upcoming, past];
  } catch (error) {
    console.log(error);
    return [[], []];
  }
}
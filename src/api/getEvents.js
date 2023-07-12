import axios from "axios";

export default async function authenticate() {

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }

  try {
    const response = await axios.get(
      'https://www.eventbriteapi.com/v3/organizations/1433796023533/events/',
      {
        headers: {
          Authorization: `Bearer TNU4SNTTAAYZB3DYL26H`,
        }
      }
    );
    const events = response.data.events;
    const upcoming = [];
    const past = [];

    events.forEach((event) => {
      if (event.status === "live") {
        const date = new Date(event.start.local);
        const formattedDate = date.toLocaleString('en-US', dateOptions);
        const time = date.toLocaleString('en-US', timeOptions);
        upcoming.push({ title: event.name.text, url: event.url, image: event.logo.original.url, date: formattedDate, time: time })
      }
      if (event.status === "completed") {
        const date = new Date(event.start.local);
        const formattedDate = date.toLocaleString('en-US', dateOptions);
        const time = date.toLocaleString('en-US', timeOptions);
        past.push({ title: event.name.text, url: event.url, image: event.logo.original.url, date: formattedDate, time: time })
      }
    })
    return [upcoming, past];

  } catch (error) {
    console.log(error);
  }
};
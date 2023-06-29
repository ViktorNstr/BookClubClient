import { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD

import EventCard from "../components/EventCard";
import AddEvent from "../components/AddEvent";

=======
import AddEvent from "../components/AddEvent";
import EventCard from "../components/EventCard";
>>>>>>> refs/remotes/origin/main

const API_URL = "http://localhost:5005";

function EventListPage() {
  const [events, setEvents] = useState([]);

  const getAllEvents = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
<<<<<<< HEAD
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/events`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
=======

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/events`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
>>>>>>> refs/remotes/origin/main
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllEvents();
<<<<<<< HEAD
  }, [] );

  
  return (
    <div className="EventsListPage">
      
      <AddEvent refreshEvents={getAllEvents} />
      
      { events.map((events) => <EventCard key={events._id} {...events} />  )} 
       
=======
  }, []);

  return (
    <div className="EventListPage">
      <AddEvent refreshEvents={getAllEvents} />

      {events.map((event) => (
        <EventCard key={event._id} {...event} />
      ))}
>>>>>>> refs/remotes/origin/main
    </div>
  );
}

export default EventListPage;

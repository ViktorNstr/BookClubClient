import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
// import AddTask from "../components/AddTask";
// import TaskCard from "../components/TaskCard";


const API_URL = "http://localhost:5005";


function EventDetailsPage (props) {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();
  
  const getEvent = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/events/${eventId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneEvent = response.data;
        setProject(oneEvent);
      })
      .catch((error) => console.log(error));
  };
  
  
  // useEffect(()=> {
  //   getProject();
  // }, [] );

  
  return (
    <div className="EventDetails">
    
      {event && (
        <>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </>
      )}

      
      <AddTask refreshEvent={getEvent} eventId={eventId} />          

      { event && event.tasks.map((task) => <TaskCard key={task._id} {...task} /> )} 

      <Link to="/events">
        <button>Back to projects</button>
      </Link>
          
      <Link to={`/events/edit/${eventId}`}>
        <button>Edit Project</button>
      </Link>
      
    </div>
  );
}

export default EventDetailsPage;
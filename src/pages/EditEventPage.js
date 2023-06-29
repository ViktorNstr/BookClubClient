import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = "http://localhost:5005";

function EditEventPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate =  useNavigate();
  const { eventId } = useParams();
  
  
  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // Send the token through the request "Authorization" Headers 
    axios
      .get(
        `${API_URL}/api/events/${eventId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }    
      )
      .then((response) => {
        const oneEvent = response.data;
        setTitle(oneEvent.title);
        setDescription(oneEvent.description);
      })
      .catch((error) => console.log(error));
    
  }, [eventId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };
  
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');  

    // Send the token through the request "Authorization" Headers   
    axios
      .put(
        `${API_URL}/api/events/${eventId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }              
      )
      .then((response) => {
        navigate(`/events/${eventId}`)
      });
  };
  
  
  const deleteEvent = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');      
    
    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${API_URL}/api/events/${eventId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then(() => navigate("/events"))
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditEventPage">
      <h3>Edit the event</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Event</button>
      </form>

      <button onClick={deleteEvent}>Delete Event</button>
    </div>
  );
}

export default EditEventPage;
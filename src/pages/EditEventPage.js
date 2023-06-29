import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditEventPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { eventID } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${API_URL}/api/events/${projectId}`)
      .then((response) => {
        const oneEvent = response.data;
        setTitle(oneEvent.title);
        setDescription(oneEvent.description);
      })
      .catch((error) => console.log(error));
    
  }, [eventID]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    axios
      .put(`${API_URL}/api/events/${eventID}`, requestBody)
      .then((response) => {
        navigate(`/events/${eventID}`)
      });
  };
  
  
  const deleteEvent = () => {
    
    axios
      .delete(`${API_URL}/api/events/${eventID}`)
      .then(() => {
        navigate("/events");
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditEventPage">
      <h3>Edit the Event</h3>

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
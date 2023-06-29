import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddEvent (props) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, time, location };
    
    const storedToken = localStorage.getItem('authToken');
 
  // Send the token through the request "Authorization" Headers
  axios
    .post(
    `${API_URL}/api/events`,
    requestBody,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then((response) => {
    // Reset the state
    setTitle("");
    setTime("");
    setDate("");
    setLocation("");
    props.refreshEvents();
  })
    .catch((error) => console.log(error));
};


  return (
    <div className="AddEvent">
      <h3>Add Book Club Event</h3>

      <form onSubmit={handleSubmit}>
        <label>Which Book:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Location:</label>
        <textarea
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Date:</label>
        <textarea
          type="text"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Time:</label>
        <textarea
          type="text"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEvent;
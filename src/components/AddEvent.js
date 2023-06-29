import { useState } from "react";
import eventsService from "../services/events.service";

function AddEvent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // axios
    //   .post(
    //     `${API_URL}/api/projects`,
    //     requestBody,
    //     { headers: { Authorization: `Bearer ${storedToken}` } }
    //   )

    eventsService.createEvent(requestBody)
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        props.refreshEvents();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddEvent">
      <h3>Add Event</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEvent;
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";


function AddBook(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { eventId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, author, genre, description, eventId };

    axios
      .post(`${API_URL}/api/books`, requestBody)
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setAuthor("");
        setGenre("");
        setDescription("");
      
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshEvent();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddBook">
      <h3>Add New Book</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Author:</label>
        <textarea
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Genre:</label>
        <textarea
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
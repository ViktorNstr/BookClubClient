import { useState } from "react";
import booksService from "../services/books.service";

function AddBook(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { eventId } = props;
    const requestBody = { title, description, eventId };

    booksService
      .createBook(requestBody)
      .then((response) => {
        setTitle("");
        setDescription("");
        props.refreshEvents();
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

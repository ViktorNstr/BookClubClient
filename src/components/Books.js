function Books({ title, author, genre }) {
    return (
      <div className="Books card">
        <h3>{title}</h3>
        <h4>author:</h4>
        <p>{author}</p>
        <h4>Genre:</h4>
        <p>{genre}</p>
      </div>
    );
  }
  
  export default Books;
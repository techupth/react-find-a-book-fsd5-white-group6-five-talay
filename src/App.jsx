import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [allBook, setAllBook] = useState([]);
  const [bookNameInput, setBookNameInput] = useState("");
  const getAllBook = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookNameInput}`
    );
    setAllBook(result.data.items);
    console.log(result);
  };
  useEffect(() => {
    getAllBook();
  }, [bookNameInput]);
  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input
        type="text"
        placeholder="Book name"
        onChange={(e) => {
          setBookNameInput(e.target.value);
        }}
        value={bookNameInput}
      />
      <ul>
        {allBook.map((book, index) => (
          <li key={index}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

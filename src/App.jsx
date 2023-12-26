import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [findBook, setFindBook] = useState("");
  const [bookList, setBookList] = useState([]);

  const findBookName = async () => {
    const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${findBook}`);
    setBookList(result.data.items);
  };

  useEffect(() => {
    findBookName();
  }, [findBook]);

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input type="text" name="text" onChange={(event) => setFindBook(event.target.value)} value={findBook} />
      <ul>
        {bookList.map((book) => {
          return (
            <>
              <li key={book.id}>{book.volumeInfo.title}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

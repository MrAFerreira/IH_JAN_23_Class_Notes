import { useState } from 'react';
import Delete from './components/Delete';
import Tracker from './components/Tracker';
import Counter from './components/Counter';
import Apartments from './components/Apartments';
import './App.css';

const bookData = [
  { title: 'War of the worlds', author: 'HG Wells', _id: 1 },
  { title: 'Moby Dick', author: 'Herman Mellvile', _id: 2 },
];

function App() {
  const [show, setShow] = useState(true);

  /*  const [books, setBooks] = useState(bookData);
  const [showBooks, setShowBooks] = useState(bookData); */

  /*  const deleteBook = (bookId) => {
    const filteredBooks = books.filter((book) => book._id !== bookId);
    setBooks(filteredBooks);
  };

  const displayBooks = (query) => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setShowBooks(filteredBooks);
  };
 */
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}> {show ? 'Hide' : 'Show'} </button>

      {show && <Counter />}

      <Apartments />

      {/*       <Tracker />
      {books.map((book) => {
        return (
          <>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <Delete deleteBook={deleteBook} bookId={book._id} />
          </>
        );
      })} */}
    </div>
  );
}

export default App;

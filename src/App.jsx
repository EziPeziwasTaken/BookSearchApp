import { useState } from 'react';
import './App.css'
import SearchBook from './SearchBook';
import Blok from './Blok/Blok.jsx';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <SearchBook setBooks={setBooks} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center'}}>
        {books.map((book) => (
          <Blok key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;

import './App.css';

import { books } from './book_data';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <section className='booklist'>
        {
          books.map( (book, index) => {
            return <Book key={book.index} {...book} />
          }
)
        }  
      </section>
    </div>
  );
}

export default App;

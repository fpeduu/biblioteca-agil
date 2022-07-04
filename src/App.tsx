import React, { useState } from 'react';
import { BooksPage, DonatePage, ReturnPage } from './pages';
import { Navbar } from './components';
import logo from './logo.svg';
import './App.css';

function App() {
  const [page, setPage] = useState(1); // 1 - books, 2 - donate, 3 - return

  return (
    <div className="App">
      <Navbar changePage={setPage}/>

      {page == 1 ? <BooksPage/> :
      page == 2 ? <DonatePage/> : 
      <ReturnPage/>}
    </div>
  );
}

export default App;

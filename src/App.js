import React, { component } from 'react';
import Movies from './components/movies';
import './App.css';
import Pagination from './components/common/pagination';

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;


import React from 'react';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <div className="container d-flex flex-column align-items-center mt-5">
        <NewsList />
      </div>
    </div>
  );
}

export default App;

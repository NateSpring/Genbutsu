import React from 'react';
import Header from './components/header';
import FacStatus from './components/facstatus';
import FacFeed from './components/facfeed';
import Goals from './components/goals';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FacStatus />

      <div className="App-Footer">
        <FacFeed />
        <Goals />
      </div>

    </div>
  );
}

export default App;

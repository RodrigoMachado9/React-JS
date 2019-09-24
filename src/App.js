import React from 'react';
import logo from './truckpad.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          truckpad
        </p>
        <a
          className="App-link"
          href="https://www.truckpad.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          click-here
        </a>
      </header>
    </div>
  );
}

export default App;

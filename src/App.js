import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Local Time</h1>
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;

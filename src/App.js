import React, { Component } from 'react';
import logo from './thermometer.svg';
import WeatherInformation from './WeatherInformartion';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your beautiful weather app! </h1>
        </header>
        <WeatherInformation />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import WeatherInformation from './Components/WeatherInformartion';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeatherInformation />
      </div>
    );
  }
}

export default App;

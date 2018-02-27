import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherInformation from './Components/WeatherInformartion';
import Header from './Components/Header';

const AppContainer = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  height: 100vh;
  grid: 1fr 1fr / 1fr;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <WeatherInformation />
      </AppContainer>
    );
  }
}

export default App;

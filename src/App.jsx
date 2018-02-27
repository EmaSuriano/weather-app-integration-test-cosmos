import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherInformation from './Components/WeatherInformartion';
import Header from './Components/Header';
import Footer from './Components/Footer';

const AppContainer = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  height: 100vh;
  grid: 190px 1fr 20px/ 1fr;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <WeatherInformation />
        <Footer />
      </AppContainer>
    );
  }
}

export default App;

import React from 'react';
import logo from './thermometer.svg';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to your beautiful weather app! </h1>
  </header>
);

export default Header;

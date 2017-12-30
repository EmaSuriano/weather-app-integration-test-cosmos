import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

const WeatherCard = props => (
  <div style={{ border: 'black 1px solid' }}>
    <p>WeatherCard</p>
    <p>Date: {props.date} </p>
    <WeatherIcon code={props.condition} />
    <p>MinTemp: {props.maxTemp} </p>
    <p>MaxTemp: {props.minTemp} </p>
  </div>
);

WeatherCard.propTypes = {
  date: PropTypes.date,
  condition: PropTypes.string,
  maxTemp: PropTypes.string,
  minTemp: PropTypes.string,
};

export default WeatherCard;

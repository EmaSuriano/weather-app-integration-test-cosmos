import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  border-radius: 2px;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const WeatherCard = props => (
  <Container>
    <p>WeatherCard</p>
    <p>Date: {props.date} </p>
    <WeatherIcon code={props.condition} />
    <p>MinTemp: {props.maxTemp} </p>
    <p>MaxTemp: {props.minTemp} </p>
  </Container>
);

WeatherCard.propTypes = {
  date: PropTypes.date,
  condition: PropTypes.string,
  maxTemp: PropTypes.string,
  minTemp: PropTypes.string,
};

export default WeatherCard;

import React from 'react';
import PropTypes from 'prop-types';
import Sunny from './Sunny';
import styled from 'styled-components';
import ICON_BY_CODE from './IconByCode';

const Icon = styled.div`
  position: relative;
  display: inline-block;
  height: 10em;
  font-size: ${props => props.size || '1em'};
`;

const WeatherIcon = ({ code }) => {
  const Weather = ICON_BY_CODE[code] || <Sunny />;
  return <Icon>{Weather}</Icon>;
};

WeatherIcon.propTypes = {
  code: PropTypes.number,
  size: PropTypes.number,
};

export default WeatherIcon;

import React from 'react';
import PropTypes from 'prop-types';
import Sunny from './Sunny';
import ICON_BY_CODE from './IconByCode';

const WeatherIcon = ({ code }) => {
  const Icon = ICON_BY_CODE[code] || Sunny;
  return <Icon />;
};

WeatherIcon.propTypes = {
  code: PropTypes.string,
};

export default WeatherIcon;

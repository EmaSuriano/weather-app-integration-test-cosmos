import React from 'react';
import PropTypes from 'prop-types';
import getIconByCode from './IconByCode';
import { Icon } from './components';

const WeatherIcon = ({ code, size }) => (
  <Icon size={size}>{getIconByCode(code)}</Icon>
);

WeatherIcon.propTypes = {
  code: PropTypes.number.isRequired,
  size: PropTypes.number,
};

WeatherIcon.defaultProps = {
  size: 1,
};

export default WeatherIcon;

import React from 'react';
import PropTypes from 'prop-types';
import Sunny from './Sunny';
import { Cloud } from './components';

const Cloudy = ({ patchy }) => [
  <Cloud key="cloud" />,
  patchy ? <Sunny onTheSide /> : <Cloud />,
];

Cloudy.propTypes = {
  patchy: PropTypes.bool,
};

Cloudy.defaultProps = {
  patchy: false,
};

export default Cloudy;

import React from 'react';
import PropTypes from 'prop-types';
import { SunSphere, Rays } from '../../index';

const Sunny = ({ onTheSide }) => (
  <SunSphere onTheSide={onTheSide}>
    <Rays />
  </SunSphere>
);

Sunny.propTypes = {
  onTheSide: PropTypes.bool,
};

Sunny.defaultProps = {
  onTheSide: false,
};

export default Sunny;

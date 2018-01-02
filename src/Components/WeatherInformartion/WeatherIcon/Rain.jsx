import React from 'react';
import PropTypes from 'prop-types';
import { Cloud, Drops, Lighting } from './components';
import Sunny from './Sunny';
import './styles.css';

const Rain = ({ lighting, patchy }) => (
  <div>
    <Cloud />
    {patchy && <Sunny onTheSide />}
    {lighting ? <Lighting /> : <Drops />}
  </div>
);

Rain.propTypes = {
  lighting: PropTypes.bool,
  patchy: PropTypes.bool,
};

Rain.defaultProps = {
  lighting: false,
  patchy: false,
};

export default Rain;

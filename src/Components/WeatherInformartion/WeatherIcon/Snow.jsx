import React from 'react';
import Sunny from './Sunny';
import { Cloud, Snowing } from './components';
import PropTypes from 'prop-types';

const Snow = ({ patchy }) => (
  <div>
    <Cloud />
    {patchy && <Sunny onTheSide />}
    <Snowing />
  </div>
);

Snow.propTypes = {
  patchy: PropTypes.bool,
};

Snow.defaultProps = {
  patchy: false,
};

export default Snow;

import React from 'react';
import Sunny from '../Sunny/Sunny';
import { Cloud, Snowing } from '../../index';
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

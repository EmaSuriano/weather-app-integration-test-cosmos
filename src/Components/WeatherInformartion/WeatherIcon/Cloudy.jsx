import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './styles.css';

export const Cloud = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: white;
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em white,
    2.0625em 0.9375em 0 -0.9375em white, 0 0 0 0.375em ${props => props.color},
    -2.1875em 0.6875em 0 -0.3125em ${props => props.color},
    2.0625em 0.9375em 0 -0.5625em ${props => props.color};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -0.5em;
    display: block;
    width: 4.5625em;
    height: 1em;
    background: white;
    box-shadow: 0 0.4375em 0 -0.0625em ${props => props.color};
  }

  &:nth-child(2) {
    z-index: 0;
    background: ${props => props.color};
    box-shadow: -2.1875em 0.6875em 0 -0.6875em ${props => props.color},
      2.0625em 0.9375em 0 -0.9375em ${props => props.color},
      0 0 0 0.375em ${props => props.color},
      -2.1875em 0.6875em 0 -0.3125em ${props => props.color},
      2.0625em 0.9375em 0 -0.5625em ${props => props.color};
    opacity: 0.3;
    transform: scale(0.5) translate(6em, -3em);
    animation: cloud 4s linear infinite;
  }

  &:nth-child(2):after {
    background: ${props => props.color};
  }
`;

const Cloudy = ({ cloudsColor }) => (
  <div>
    <Cloud color={cloudsColor} />
    <Cloud color={cloudsColor} />
  </div>
);

Cloudy.propTypes = {
  cloudsColor: PropTypes.string,
};

Cloudy.defaultProps = {
  cloudsColor: 'grey',
};

export default Cloudy;

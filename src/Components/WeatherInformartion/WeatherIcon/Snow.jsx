import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './styles.css';

const Sun = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5em;
  height: 2.5em;
  margin: -1.25em;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em ${props => props.color};
  animation: spin 12s infinite linear;
`;

const Rays = styled.div`
  position: absolute;
  top: -2em;
  left: 50%;
  display: block;
  width: 0.375em;
  height: 1.125em;
  margin-left: -0.1875em;
  background: ${props => props.color};
  border-radius: 0.25em;
  box-shadow: 0 5.375em ${props => props.color};

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0em;
    left: 0em;
    display: block;
    width: 0.375em;
    height: 1.125em;
    transform: rotate(60deg);
    transform-origin: 50% 3.25em;
    background: ${props => props.color};
    border-radius: 0.25em;
    box-shadow: 0 5.375em ${props => props.color};
  }

  &:before {
    transform: rotate(120deg);
  }
`;

const Sunny = ({ sunColor, raysColor }) => (
  <Sun color={sunColor}>
    <Rays color={raysColor} />
  </Sun>
);

Sunny.propTypes = {
  sunColor: PropTypes.string,
  raysColor: PropTypes.string,
};

Sunny.defaultProps = {
  sunColor: 'yellow',
  raysColor: 'orange',
};

export default Sunny;

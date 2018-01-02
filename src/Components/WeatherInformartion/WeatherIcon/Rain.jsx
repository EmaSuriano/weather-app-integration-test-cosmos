import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './styles.css';
import { Cloud } from './Cloudy';
import Sunny from './Sunny';

export const Drops = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: white;

  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 1.125em;
    height: 1.125em;
    margin: -1em 0 0 -0.25em;
    background: #0cf;
    border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
    transform: rotate(-28deg);
    animation: rain 3s linear infinite;
  }
`;

const BoltsContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: white;
`;

const Bolt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.25em 0 0 -0.125em;
  color: grey;
  opacity: 0.3;
  animation: lightning 2s linear infinite;

  &:nth-child(2) {
    width: 0.5em;
    height: 0.25em;
    margin: -1.75em 0 0 -1.875em;
    transform: translate(2.5em, 2.25em);
    opacity: 0.2;
    animation: lightning 1.5s linear infinite;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin: -1.625em 0 0 -1.0125em;
    border-top: 1.25em solid transparent;
    border-right: 0.75em solid;
    border-bottom: 0.75em solid;
    border-left: 0.5em solid transparent;
    transform: skewX(-10deg);
  }
  &:after {
    margin: -0.25em 0 0 -0.25em;
    border-top: 0.75em solid;
    border-right: 0.5em solid transparent;
    border-bottom: 1.25em solid transparent;
    border-left: 0.75em solid;
    transform: skewX(-10deg);
  }
  &:nth-child(2):before {
    margin: -0.75em 0 0 -0.5em;
    border-top: 0.625em solid transparent;
    border-right: 0.375em solid;
    border-bottom: 0.375em solid;
    border-left: 0.25em solid transparent;
  }
  &:nth-child(2):after {
    margin: -0.125em 0 0 -0.125em;
    border-top: 0.375em solid;
    border-right: 0.25em solid transparent;
    border-bottom: 0.625em solid transparent;
    border-left: 0.375em solid;
  }
`;

export const Lighting = () => (
  <BoltsContainer>
    <Bolt />
    <Bolt />
  </BoltsContainer>
);

const Rain = ({ cloudColor, lighting, patchy }) => (
  <div>
    <Cloud color={cloudColor} />
    {patchy && <Sunny onTheSide />}
    {lighting ? <Lighting /> : <Drops />}
  </div>
);

Rain.propTypes = {
  cloudColor: PropTypes.string,
  lighting: PropTypes.bool,
  patchy: PropTypes.bool,
};

Rain.defaultProps = {
  cloudColor: 'grey',
  lighting: false,
  patchy: false,
};

export default Rain;

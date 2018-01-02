import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { GREY, WHITE } from '../colors';

const CloudAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translate(-200%, -3em);
  }
`;

const Cloud = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: ${props => props.theme.backgroundColor};
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em ${props => props.theme.backgroundColor},
    2.0625em 0.9375em 0 -0.9375em ${props => props.theme.backgroundColor},
    0 0 0 0.375em ${props => props.theme.color},
    -2.1875em 0.6875em 0 -0.3125em ${props => props.theme.color},
    2.0625em 0.9375em 0 -0.5625em ${props => props.theme.color};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -0.5em;
    display: block;
    width: 4.5625em;
    height: 1em;
    background: ${props => props.theme.backgroundColor};
    box-shadow: 0 0.4375em 0 -0.0625em ${props => props.theme.color};
  }

  &:nth-child(2) {
    z-index: 0;
    background: ${props => props.theme.color};
    box-shadow: -2.1875em 0.6875em 0 -0.6875em ${props => props.theme.color},
      2.0625em 0.9375em 0 -0.9375em ${props => props.theme.color},
      0 0 0 0.375em ${props => props.theme.color},
      -2.1875em 0.6875em 0 -0.3125em ${props => props.theme.color},
      2.0625em 0.9375em 0 -0.5625em ${props => props.theme.color};
    opacity: 0.6;
    transform: scale(0.5) translate(6em, -3em);
    animation: ${CloudAnimation} 4s linear infinite;
  }

  &:nth-child(2):after {
    background: ${props => props.theme.color};
  }
`;

Cloud.propTypes = {
  theme: {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
  },
};

Cloud.defaultProps = {
  theme: {
    color: GREY,
    backgroundColor: WHITE,
  },
};

export default Cloud;

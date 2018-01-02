import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.backgroundColor};
`;

BackgroundContainer.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

// export const withBackground = backgroundColor => Icon => props => (
//   <BackgroundContainer backgroundColor={backgroundColor}>
//     <Icon {...props} />
//   </BackgroundContainer>
// );

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const withBackground = backgroundColor => WrappedComponent => {
  class withBackground extends React.Component {
    render() {
      return (
        <BackgroundContainer backgroundColor={backgroundColor}>
          <WrappedComponent {...this.props} />
        </BackgroundContainer>
      );
    }
  }
  withBackground.displayName = getDisplayName(WrappedComponent);
  return withBackground;
};

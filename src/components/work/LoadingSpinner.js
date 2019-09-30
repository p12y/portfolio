import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

const animation = keyframes`
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
`;

const InnerDiv = styled.div`
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #fff;
  animation: ${animation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
`;

const Uno = styled(InnerDiv)`
  left: 6px;
  animation-delay: -0.24s;
`;

const Dos = styled(InnerDiv)`
  left: 26px;
  animation-delay: -0.12s;
`;

const Tres = styled(InnerDiv)`
  left: 45px;
  animation-delay: 0;
`;

function LoadingSpinner({ loaded }) {
  return (
    <div>
      {!loaded && (
        <Container>
          <Uno></Uno>
          <Dos></Dos>
          <Tres></Tres>
        </Container>
      )}
    </div>
  );
}

LoadingSpinner.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default LoadingSpinner;

import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  background: #2BC0E4; /* fallback for old browsers */
  background: ${props => props.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: ${props => props.modalOpen ? 'block' : 'none'};
`;

function WorkModal(props) {
  return (
    <Overlay onClick={props.toggleOpen} {...props}></Overlay>
  );
}

export default WorkModal;
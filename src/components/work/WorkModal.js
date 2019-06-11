import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  display: ${props => props.modalOpen ? 'block' : 'none'};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const OverlayBackground = styled.div`
  background: #2BC0E4; /* fallback for old browsers */
  background: ${props => props.background};
  height: 100%;
  left: 0;
  opacity: 0.95;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  color: white;
  font-family: ${({ theme }) => theme.fonts.title};
  z-index: 4;
`;

function WorkModal(props) {
  return (
    <Overlay
      onClick={props.toggleModalOpen}
      modalOpen={props.modalOpen}
    >
      <OverlayBackground
        background={props.background}
      />
      <Container>
        <Title>{props.projectTitle}</Title>
      </Container>
    </Overlay>
  );
}

export default WorkModal;
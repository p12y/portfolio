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
  height: 100%;
  z-index: 2;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  grid-template-areas: "images info"
`;

const ImagesContainer = styled.div`
  grid-area: images;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LargeImage = styled.div`
  width: 80%;
  height: 40%;
  background: white;
  border-radius: 4px;
`;

const InfoContainer = styled.div`
  grid-area: info;
  text-align: center;
  color: white;
  padding: 30vh 5em 0 0;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
`;

const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
`;

function WorkModal(props) {
  return (
    <Overlay
      onClick={props.toggleModalOpen}
      modalOpen={props.modalOpen}
    >
      <OverlayBackground
        background={props.project.background}
      />
      <Container>
        <ImagesContainer>
          <LargeImage></LargeImage>
        </ImagesContainer>
        <InfoContainer>
          <Title>{props.project.projectTitle}</Title>
          <Info>{props.project.projectInfo}</Info>
        </InfoContainer>
      </Container>
    </Overlay>
  );
}

export default WorkModal;
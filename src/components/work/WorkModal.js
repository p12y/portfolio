import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-image-gallery/styles/css/image-gallery.css";
import './imageGalleryOverrides.css';

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
  &::before {
    background-color: ${props => props.theme.background};
    content: "";
    display: block;
    height: 100%;
    opacity: ${props => props.theme.mode === 'dark' ? 0.95 : 0};
    position: absolute;
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-areas: "images info";
  grid-template-columns: 60% 40%;
  height: 100%;
  position: relative;
`;

const ImagesContainer = styled.div`
  align-items: center;
  display: flex;
  grid-area: images;
  justify-content: center;
`;

const InfoContainer = styled.div`
  color: white;
  grid-area: info;
  padding: 30vh 5em 0 0;
  text-align: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
`;

const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
`;

const ExitButton = styled.div`
  color: white;
  cursor: pointer;
  font-size: 2em
  margin: 1em;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
`;

function WorkModal(props) {
  return (
    <Overlay
      modalOpen={props.modalOpen}
    >
      <OverlayBackground
        background={props.project.background}
      />
      <ExitButton onClick={props.toggleModalOpen}>
        <FontAwesomeIcon icon="times" />
      </ExitButton>
      <Container>
        <ImagesContainer>
          <ImageGallery
            items={props.project.images}
            showBullets={true}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
          />
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
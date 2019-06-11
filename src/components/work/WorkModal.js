import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from 'styles/media';
import "react-image-gallery/styles/css/image-gallery.css";
import './imageGalleryOverrides.css';
import Tag from 'components/styled/Tag';

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
  ${media.tablet`
    grid-template-areas: "info" "images";
    grid-template-columns: 100%;
    grid-template-rows: 50%;
  `}
  ${media.phone`
    grid-template-areas: "info" "images";
    grid-template-columns: 100%;
    grid-template-rows: 50%;
  `}
`;

const ImagesContainer = styled.div`
  align-items: center;
  display: flex;
  grid-area: images;
  justify-content: flex-end;
  padding-right: 2em;
  ${media.tablet`
    justify-content: center;
    padding-right: 2em;
    padding: 0;
  `}
  ${media.phone`
    justify-content: center;
    padding: 0;
  `}
`;

const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  grid-area: info;
  justify-content: center;
`;

const TextContainer = styled.div`
  color: white;
  padding-right: 2em;
  text-align: center;
  width: 80%;
  ${media.tablet`
    padding: 0;
  `}
  ${media.phone`
    padding: 0;
  `}
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

const Tags = styled.p`
  text-align: center;
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
        <InfoContainer>
          <TextContainer>
            <Title>{props.project.projectTitle}</Title>
            <Info>{props.project.projectInfo}</Info>
          </TextContainer>
        </InfoContainer>
        <ImagesContainer>
          <div style={{ width: '80%' }}>
            <ImageGallery
              items={props.project.images}
              showBullets={true}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
            <Tags>
              {props.project.tags.map((tag, index) => <>
                <Tag>{tag}</Tag>{index === props.project.tags.length - 1 ? '' : ' '}
              </>)}
            </Tags>
          </div>

        </ImagesContainer>
      </Container>
    </Overlay>
  );
}

export default WorkModal;
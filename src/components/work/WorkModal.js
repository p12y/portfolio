import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated, config } from 'react-spring';
import media from 'styles/media';
import "react-image-gallery/styles/css/image-gallery.css";
import './imageGalleryOverrides.css';
import Tag from 'components/styled/Tag';

const Overlay = styled(animated.div)`
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
    opacity: ${props => props.theme.mode === 'dark' ? 0.7 : 0};
    position: absolute;
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-areas: "images info";
  grid-template-columns: 50% 50%;
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

const ImagesContainer = styled(animated.div)`
  align-items: center;
  display: flex;
  grid-area: images;
  justify-content: center;
  padding 2em;
`;

const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  grid-area: info;
  justify-content: center;
`;

const TextContainer = styled(animated.div)`
  color: white;
  padding: 2em;
  text-align: center;
  width: 80%;
  ${media.phone`
    padding-top: 5em;
  `}
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
`;

const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
`;

const ExitButton = styled(animated.div)`
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
  const openSpringProps = useSpring({
    immediate: props.modalOpen ? false : true,
    visibility: props.modalOpen ? 'visible' : 'hidden',
    opacity: props.modalOpen ? 1 : 0,
  });

  const sharedSpringProps = {
    immediate: props.modalOpen ? false : true,
    opacity: props.modalOpen ? 1 : 0,
    transform: props.modalOpen ? 'scale(1)' : 'scale(0.5)',
    scale: props.modalOpen ? 1 : 0,
    config: config.gentle,
  };

  const textSpringProps = useSpring({
    ...sharedSpringProps,
    config: config.gentle,
    delay: 200,
  });

  const imageSpringProps = useSpring({
    ...sharedSpringProps,
    config: config.default,
  });

  const exitSpringProps = useSpring({
    ...sharedSpringProps,
    transform: props.modalOpen ? 'scale(1)' : 'scale(0)',
    config: config.gentle,
  });

  return (
    <Overlay
      style={openSpringProps}
    >
      <OverlayBackground
        background={props.project.background}
      />
      <ExitButton onClick={props.toggleModalOpen} style={exitSpringProps}>
        <FontAwesomeIcon icon="times" />
      </ExitButton>
      <Container>
        <InfoContainer>
          <TextContainer style={textSpringProps}>
            <Title>{props.project.projectTitle}</Title>
            <Info>{props.project.projectInfo}</Info>
          </TextContainer>
        </InfoContainer>
        <ImagesContainer style={imageSpringProps}>
          <div>
            <ImageGallery
              items={props.project.images}
              showBullets={true}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
            <Tags>
              {props.project.tags.map((tag, index) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          </div>
        </ImagesContainer>
      </Container>
    </Overlay>
  );
}

export default WorkModal;
import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated, config } from 'react-spring';
import { Transition } from 'react-spring/renderprops.cjs';
import { FocusOn } from 'react-focus-on';
import media from 'styles/media';
import 'react-image-gallery/styles/css/image-gallery.css';
import './imageGalleryOverrides.css';
import Tag from 'components/styled/Tag';
import LoadingSpinner from './LoadingSpinner';

const Overlay = styled(animated.div)`
  backdrop-filter: blur(3px);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  touch-action: none;
  webkit-tap-highlight-color: transparent;
  width: 100%;
  z-index: 1;
`;

const OverlayBackground = styled.div`
  background: #2bc0e4; /* fallback for old browsers */
  background: ${props => props.background};
  height: 100%;
  left: 0;
  opacity: 0.95;
  position: fixed;
  top: 0;
  touch-action: none;
  webkit-tap-highlight-color: transparent;
  width: 100%;
  &::before {
    background-color: ${props => props.theme.background};
    content: '';
    display: block;
    height: 100%;
    opacity: ${props => (props.theme.mode === 'dark' ? 0.7 : 0)};
    position: absolute;
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-areas: 'images info';
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

const UrlSection = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Link = styled.a`
  border-radius: 4px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  margin-right: 0.5em;
  margin-left: 0.5em;
  font-size: 1.6em;
  outline: none;
  transition: color 0.25s, box-shadow 0.25s;
  &:hover {
    color: var(--dark-bg-color);
  }
  &:focus {
    box-shadow: 0 0 0 3px var(--secondary);
  }
`;

const ExitButton = styled(animated.button)`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 2em
  justify-content: center;
  margin: 1em;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  transition: box-shadow 0.25s;
  &:focus {
    box-shadow: 0 0 0 3px var(--secondary);
  }
`;

const Tags = styled.p`
  text-align: center;
`;

function WorkModal({ toggleModalOpen, open, project }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(false);
  }, [project, open]);

  const sharedSpringProps = {
    immediate: open ? false : true,
    opacity: open ? 1 : 0,
    transform: open ? 'scale(1)' : 'scale(0.5)',
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
    transform: open ? 'scale(1)' : 'scale(0)',
    config: config.gentle,
  });

  const onImageLoad = useCallback(
    (() => {
      let count = 0;
      return () => {
        count += 1;
        if (count === project.images.length) {
          setImagesLoaded(true);
        }
      };
    })(),
    [project, open],
  );

  return ReactDOM.createPortal(
    <Transition
      config={{ duration: 100 }}
      items={open}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {open =>
        open &&
        (props => (
          <FocusOn onClickOutside={toggleModalOpen} onEscapeKey={toggleModalOpen} shards={[]}>
            <Overlay style={{ ...props }}>
              <OverlayBackground background={project.background} />
              <ExitButton onClick={toggleModalOpen} style={exitSpringProps} aria-label="Close dialog">
                <FontAwesomeIcon icon="times" />
              </ExitButton>
              <Container>
                <InfoContainer>
                  <TextContainer style={textSpringProps}>
                    <Title>{project.projectTitle}</Title>
                    <Info>{project.projectInfo}</Info>
                    {project.appUrl && project.githubUrl && (
                      <div>
                        <UrlSection>
                          <Link href={project.githubUrl} target="_blank" aria-label="View project on Github">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                          </Link>
                          <Link href={project.appUrl} target="_blank" aria-label="View live site">
                            <FontAwesomeIcon icon="external-link-alt" />
                          </Link>
                        </UrlSection>
                      </div>
                    )}
                  </TextContainer>
                </InfoContainer>
                <ImagesContainer style={imageSpringProps}>
                  <LoadingSpinner loaded={imagesLoaded} />
                  <div
                    style={{
                      display: imagesLoaded ? 'block' : 'none',
                    }}
                  >
                    <ImageGallery
                      onImageLoad={onImageLoad}
                      items={project.images}
                      showBullets={true}
                      showThumbnails={false}
                      showFullscreenButton={false}
                      showPlayButton={false}
                    />
                    <Tags>
                      {project.tags.map((tag, index) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Tags>
                  </div>
                </ImagesContainer>
              </Container>
            </Overlay>
          </FocusOn>
        ))
      }
    </Transition>,
    document.body,
  );
}

WorkModal.propTypes = {
  toggleModalOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired,
};

export default WorkModal;

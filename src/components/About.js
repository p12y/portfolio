import React, { useState } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from 'styles/media';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

const TextContainer = styled.div`
  text-align: center;
  font-family: 'Space Mono', monospace;
  color: ${props => props.theme.titleColor};
  margin-top: -5%;
  margin: 0 1.5em 0 1.5em;
`;

const ColorSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary}
`;

const FindOutMore = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: ${props => props.theme.titleColor};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const H1 = styled.h1`
  ${media.phone`font-size: 2em;`}
`;

function About() {
  const [arrowVisible, setArrowVisible] = useState(true);
  const props = useSpring({ opacity: arrowVisible ? 1 : 0 });

  return (
    <>
      <Container>
        <TextContainer>
          <Waypoint
            onPositionChange={({ currentPosition }) => {
              setArrowVisible(currentPosition === 'inside');
            }}
          />
          <H1>I’m <ColorSpan>Peter Tyldesley</ColorSpan>, full-stack developer,
            <br />full-time tinkerer and creator of things. 👊
          </H1>
        </TextContainer>
      </Container>
      <FindOutMore>
        <animated.div style={{ ...props, fontSize: '2em' }}>
          <FontAwesomeIcon icon="level-down-alt" />
        </animated.div>
      </FindOutMore>
    </>
  );
}

export default About;
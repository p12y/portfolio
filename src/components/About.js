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
  color: ${({ theme }) => theme.colors.primary};
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

const Background = styled.div`
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
`;

const Stripe = styled.div``;

const Stripes = styled.div`
  position: relative;
  display: grid;
  grid: repeat(5, 200px) / repeat(10, 1fr);
  opacity: 0.15;
  ${Stripe}:nth-child(1) {
    grid-column: span 3;
    background: linear-gradient(to right, #ffedbc, #ed4264);
    transform: skewY(-12deg);
    transform-origin: 0;
  }
  ${Stripe}:nth-child(2) {
    grid-area: 2 / span 3 / auto / -1;
    background: linear-gradient(to right, #b6fbff, #83a4d4);
    transform: skewY(12deg);
    transform-origin: 0;
  }
  ${Stripe}:nth-child(3) {
    grid-row: 4;
    grid-column: span 3;
    background: linear-gradient(to right, #d7dde8, #757f9a);
    transform: skewY(-12deg);
    transform-origin: 0;
  }
  ${Stripe}:nth-child(4) {
    grid-area: 4 / span 3 / auto / -1;
    background: linear-gradient(to right, #ffffff, #ef3b36);
    transform: skewY(12deg);
    transform-origin: 0;
  }
`;

const H1 = styled.h1`
  ${media.phone`font-size: 1.6em;`}
`;

function About() {
  const [arrowVisible, setArrowVisible] = useState(true);
  const props = useSpring({ opacity: arrowVisible ? 1 : 0 });

  return (
    <>
      <Background>
        <Stripes>
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
        </Stripes>
      </Background>

      <Container id="about">
        <TextContainer>
          <Waypoint
            onPositionChange={({ currentPosition }) => {
              setArrowVisible(currentPosition === 'inside');
            }}
          />
          <H1>
            I’m <ColorSpan>Peter Tyldesley</ColorSpan>, full-stack developer,
            <br />
            full-time tinkerer and creator of things. 👊
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

import React, { useState } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import media from 'styles/media';
import NudgeText from '../NudgeText';
import NameModal from '../NameModal';
import DownArrow from './DownArrow';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: calc(100% - 100px);
  justify-content: center;
`;

const TextContainer = styled.div`
  color: ${props => props.theme.titleColor};
  font-family: 'Space Mono', monospace;
  margin-top: -5%;
  margin: 0 1.5em 0 1.5em;
  text-align: left;
  width: 40vw;
  font-size: 1.5em;
`;

const ColorSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Background = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1;
`;

const Stripe = styled.div``;

const Stripes = styled.div`
  display: grid;
  grid: repeat(5, 200px) / repeat(10, 1fr);
  opacity: 0.15;
  position: relative;
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

const P = styled.p`
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.2rem;
`;

function About() {
  const [arrowVisible, setArrowVisible] = useState(true);
  const [nudgeNeeded, setNudgeNeeded] = useState(true);
  const [nameModalOpen, setNameModalOpen] = useState(false);

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
      {nudgeNeeded && (
        <NudgeText
          onClick={() => {
            setNudgeNeeded(false);
            setNameModalOpen(true);
          }}
        />
      )}
      <Container id="about">
        <TextContainer>
          <Waypoint
            onPositionChange={({ currentPosition }) => {
              setArrowVisible(currentPosition === 'inside');
            }}
          />
          <H1>
            Hi,<br />I'm <ColorSpan>Pete</ColorSpan>. 👋
          </H1>
          <P>I create beautiful, interactive user interfaces that are performant and accessible.</P>
        </TextContainer>
      </Container>
      <DownArrow visible={arrowVisible} />
      <NameModal open={nameModalOpen} onClose={() => setNameModalOpen(false)} />
    </>
  );
}

export default About;

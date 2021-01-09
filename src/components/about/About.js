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
  @media (min-width: 2500px) {
    margin-left: 500px;
    margin-right: 500px;
  }
`;

const TextContainer = styled.div`
  color: ${props => props.theme.titleColor};
  font-family: 'Space Mono', monospace;
  margin-top: -5%;
  margin: 0 1.5em 0 1.5em;
  text-align: left;
  width: 70vw;
  font-size: 3.5vmin;
  ${media.tablet`
    width: 60%;
    font-size: 3.5vmin;
  `}
  ${media.phone`
    width: 100%;
    font-size: 6vmin;
  `}
`;

const ColorSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const H1 = styled.h1`
  ${media.phone`font-size: 1.6em;`}
`;

const P = styled.p`
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
`;

function About() {
  const [arrowVisible, setArrowVisible] = useState(true);
  const [nudgeNeeded, setNudgeNeeded] = useState(true);
  const [nameModalOpen, setNameModalOpen] = useState(false);

  return (
    <>
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
            Hi,
            <br />
            I'm <ColorSpan>Pete</ColorSpan>. 👋
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

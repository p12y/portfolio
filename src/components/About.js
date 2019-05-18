import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TextContainer = styled.div`
  text-align: center;
  font-family: 'Space Mono', monospace;
  color: #333;
  margin-top: -5%;
`;

const ColorSpan = styled.span`
  color: ${props => props.color}
`;

function About() {
  return (
    <Container>
      <TextContainer><h1>I’m <ColorSpan color="#F62B54">Peter Tyldesley</ColorSpan>, full stack developer,<br />full-time tinkerer and creator of things. 👊</h1></TextContainer>
    </Container>
  )
}

export default About;
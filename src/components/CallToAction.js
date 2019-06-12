import React from 'react';
import styled from 'styled-components';
import GradientButton from 'components/GradientButton';

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  margin-top: 0;
`;

const Background = styled.div`
  background: #ddd;
  height: 10rem;
`;

const Paper = styled.div`
  background: ${props => props.theme.titleColor};
  border-radius: 4px;
  box-shadow: 2px 10px 12px -9px rgba(0,0,0,0.75);
  color: ${props => props.theme.background};
  margin: auto;
  margin-top: -15rem;
  padding: 2.5rem;
  position: relative;
  text-align: center;
  width: 70%;
  z-index: 1;
`;

function CallToAction() {
  return (
    <>
      <Background />
      <Paper id="contact">
        <Title>Get in touch</Title>
        <GradientButton
          inverted
          text="email me"
          href="mailto:ptylde@gmail.com"
          icon="paper-plane"
          target="_top"
        />
      </Paper>
    </>
  );
}

export default CallToAction;
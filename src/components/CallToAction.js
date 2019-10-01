import React from 'react';
import styled from 'styled-components';
import GradientButton from 'components/GradientButton';
import media from 'styles/media';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  margin-top: 0;
  ${media.phone`
    font-size: 1.6em;
  `}
`;

export const Background = styled.div`
  background: ${({ theme }) => theme.nav.background};
  height: 10rem;
`;

export const Paper = styled.div`
  background: ${props => props.theme.titleColor};
  border-radius: 4px;
  box-shadow: 2px 10px 12px -9px rgba(0, 0, 0, 0.75);
  color: ${props => props.theme.background};
  margin: auto;
  margin-top: -15rem;
  padding: 2.5rem;
  position: relative;
  text-align: center;
  width: 70%;
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

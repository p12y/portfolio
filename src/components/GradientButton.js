import React from 'react';
import styled from 'styled-components';

const ButtonOuter = styled.a`
  align-items: center;
  background: #12c2e9;  /* fallback for old browsers */
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  border-radius: 50em;
  display: inline-flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  &::after {
    background: inherit;
    border-radius: 50em;
    bottom: 0;
    content: "";
    filter: blur(0px);
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: absolute;
    transition: all .2s ease-in-out;
    width: 100%;
    z-index: -1;
  }
  &:hover::after {
    filter: blur(4px);
  }
`;

const ButtonInner = styled.span`
  background: ${({ theme }) => theme.background};
  border-radius: 50em;
  color: ${({ theme }) => theme.titleColor};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  margin: 2px;
  padding: 0.7rem;
  padding-left: 2rem;
  padding-right: 2rem;
  white-space: nowrap;
`;

function GradientButton({ href, children }) {
  return (
    <ButtonOuter href={href} target="_blank" rel="noopener noreferrer">
      <ButtonInner>
        {children}
      </ButtonInner>
    </ButtonOuter>
  );
}

export default GradientButton;
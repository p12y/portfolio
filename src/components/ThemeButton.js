import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background: #ddd;
  color: #333;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  margin: 1rem;
  font-size: 2rem;
  -webkit-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  -moz-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  border-radius: 4px 20% 4px 20%;
`;

function LightButton() {
  return (
    <Wrapper>
      <FontAwesomeIcon icon="sun" />
    </Wrapper>
  );
}

function DarkButton() {
  return (
    <Wrapper>
      <FontAwesomeIcon icon="moon" />
    </Wrapper>
  );
}

function ThemeButton() {
  return (
    <DarkButton />
  );
}

export default ThemeButton;
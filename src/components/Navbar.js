import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  position: fixed;
  -webkit-box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.15); 
  box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.15);
  height: 100vh;
  width: 4rem;
  top: 0;
  left: 0;
  background: ${props => props.theme.nav.background};
`;

const Button = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HomeButton = styled(Button)`
  color: white;
  font-weight: bold;
  font-family: 'Space Mono', monospace;
  background: #F62B54;
`;

const IconButton = styled(Button)`
  font-size: 1.5rem;
  background: ${props => props.theme.nav.background};
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.nav.icon}
`;

const HoverCircle = styled.div`
  transition: background-color 0.1s ease;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  &:hover {
    background: ${props => props.theme.nav.hoverCircle}
  }
`;

function NavButton({ icon }) {
  return (
    <IconButton>
      <HoverCircle>
        <FontAwesomeIcon icon={icon} />
      </HoverCircle>
    </IconButton>
  );
}

function Navbar() {
  return (
    <Wrapper>
      <HomeButton>P12y</HomeButton>
      <NavButton icon="toolbox" />
      <NavButton icon="laptop-code" />
      <NavButton icon="paper-plane" />
    </Wrapper>
  );
}

export default Navbar;
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  position: fixed;
  -webkit-box-shadow: 2px 0px 15px 5px rgba(0,0,0,0.4); 
  box-shadow: 2px 0px 15px 5px rgba(0,0,0,0.4);
  height: 100vh;
  width: 4em;
  top: 0;
  left: 0;
  background: #ddd;
`;

const Button = styled.div`
  width: 100%;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeButton = styled(Button)`
  color: white;
  font-family: 'Space Mono', monospace;
  background: #F62B54;
`;

const IconButton = styled(Button)`
  font-size: 1.5em;
  color: #333;
`;

function NavButton({ icon }) {
  return (
    <IconButton>
      <FontAwesomeIcon icon={icon} />
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
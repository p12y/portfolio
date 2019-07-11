import React from 'react';
import styled from 'styled-components';
import Ink from 'react-ink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from 'styles/media';

const Wrapper = styled.div`
  position: fixed;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.15);
  height: 100vh;
  width: 4rem;
  top: 0;
  left: 0;
  background: ${props => props.theme.nav.background};
  ${media.phone`display: none;`}
`;

const Button = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeButton = styled(Button)`
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Space Mono', monospace;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

const IconButton = styled(Button)`
  font-size: 1.5rem;
  background: ${props => props.theme.nav.background};
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.nav.icon};
`;

const HoverCircle = styled.div`
  cursor: pointer;
  position: relative;
  transition: background-color 0.1s ease;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  &:hover {
    background: ${props => props.theme.nav.hoverCircle};
  }
`;

function NavButton({ icon, onClick }) {
  return (
    <IconButton onClick={onClick}>
      <HoverCircle>
        <Ink />
        <FontAwesomeIcon icon={icon} />
      </HoverCircle>
    </IconButton>
  );
}

function Navbar() {
  const handleClick = id => () => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Wrapper>
      <HomeButton onClick={handleClick('about')}>
        <Ink />
        P12y
      </HomeButton>
      <NavButton icon="toolbox" onClick={handleClick('tools')} />
      <NavButton icon="laptop-code" onClick={handleClick('work')} />
      <NavButton icon="paper-plane" onClick={handleClick('contact')} />
    </Wrapper>
  );
}

export default Navbar;

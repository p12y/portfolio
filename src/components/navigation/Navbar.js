import React from 'react';
import styled from 'styled-components';
import Ink from 'react-ink';
import media from 'styles/media';
import NavigationButtonBase from 'components/styled/NavigationButtonBase';
import NavButton from './NavButton';

const Wrapper = styled.nav`
  position: fixed;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.15);
  height: 100%;
  width: 4rem;
  top: 0;
  left: 0;
  background: ${props => props.theme.nav.background};
  ${media.phone`display: none;`}
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeButton = styled(NavigationButtonBase)`
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Space Mono', monospace;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  transition: all .25s;
  &:focus {
    box-shadow: 0 0 0 3px var(--secondary-lighter);
  }
`;

function Navbar() {
  const handleClick = id => () => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Wrapper role='navigation'>
      <Ul>
        <Li>
          <HomeButton onClick={handleClick('about')} aria-label="Top">
            <Ink />
            P12y
          </HomeButton>
        </Li>
        <Li>
          <NavButton icon="id-card" onClick={handleClick('work')} ariaLabel="About" />
        </Li>
        <Li>
          <NavButton icon="paper-plane" onClick={handleClick('contact')} ariaLabel="Contact" />
        </Li>
      </Ul>
    </Wrapper>
  );
}

export default Navbar;

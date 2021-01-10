import React, { useEffect, useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated } from 'react-spring';
import ThemeContext from 'context/ThemeContext';
import media from 'styles/media';

const Button = styled.button`
  align-items: center;
  background: ${props => props.background};
  border: none;
  outline: none;
  border-radius: 4px 20% 4px 20%;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.33);
  color: #333;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 100%;
  justify-content: center;
  width: 100%;
  transition: all 0.25s;
  ${media.phone`
    font-size: 1.8rem;
  `}
  &:focus {
    box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.33), 0 0 0 3px var(--secondary);
  }
`;

const ButtonContainer = styled.div`
  height: 4rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 4rem;
  ${media.phone`
    height: 3rem;
    margin-right: 0.5rem;
    width: 3rem;
  `}
`;

function ThemeButton() {
  const lastScrollTop = useRef(0);
  const [visibility, setVisibility] = useState(false);
  const theme = useContext(ThemeContext);
  const isLightTheme = theme.mode === 'light';
  const invertedTheme = () => (isLightTheme ? 'dark' : 'light');

  const scrollListener = () => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    /*
      Hide the button if scrolling down,
      show it if scrolling up
    */
    position > lastScrollTop.current
      ? setVisibility(position > 300)
      : setVisibility(false);
    lastScrollTop.current = position;
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollListener);
    return () => document.removeEventListener('scroll', scrollListener);
  }, []);

  const props = useSpring({
    marginTop: visibility ? '-97%' : '0%',
  });

  return (
    <ButtonContainer>
      <animated.div
        onMouseEnter={() => setVisibility(false)}
        style={{ ...props, height: '100%' }}
      >
        <Button
          onFocus={() => setVisibility(false)}
          onClick={() => {
            theme.setMode(invertedTheme());
            localStorage.setItem('mode', invertedTheme());
          }}
          background={`var(--${invertedTheme()}-bg-color)`}
          aria-label="Toggle theme"
        >
          <FontAwesomeIcon
            color={`var(--${isLightTheme ? 'light' : 'dark'}-bg-color)`}
            icon={isLightTheme ? 'moon' : 'sun'}
          />
        </Button>
      </animated.div>
    </ButtonContainer>
  );
}

export default ThemeButton;

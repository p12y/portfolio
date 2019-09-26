import React, { useEffect, useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated } from 'react-spring';
import ThemeContext from 'context/ThemeContext';
import media from 'styles/media';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.background};
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.33);
  border-radius: 4px 20% 4px 20%;
  cursor: pointer;
  ${media.phone`
    font-size: 1.8rem;
  `}
`;

const ButtonContainer = styled.div`
  right: 0;
  top: 0;
  margin-top: 0.5rem;
  margin-right: 2rem;
  position: fixed;
  width: 4rem;
  height: 4rem;
  ${media.phone`
    margin-right: 0.5rem;
    width: 3rem;
    height: 3rem;
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
        <Wrapper
          onClick={() => {
            theme.setMode(invertedTheme());
            localStorage.setItem('mode', invertedTheme());
          }}
          background={`var(--${invertedTheme()}-bg-color)`}
        >
          <FontAwesomeIcon
            color={`var(--${isLightTheme ? 'light' : 'dark'}-bg-color)`}
            icon={isLightTheme ? 'moon' : 'sun'}
          />
        </Wrapper>
      </animated.div>
    </ButtonContainer>
  );
}

export default ThemeButton;

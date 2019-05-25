import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated } from 'react-spring';
import ThemeContext from '../context/ThemeContext';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.background};
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  -webkit-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  -moz-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  border-radius: 4px 20% 4px 20%;
  cursor: pointer;
`;

function LightButton({ onClick }) {
  return (
    <Wrapper onClick={onClick} background="white">
      <FontAwesomeIcon icon="sun" />
    </Wrapper>
  );
}

function DarkButton({ onClick }) {
  return (
    <Wrapper onClick={onClick} background="#202B31">
      <FontAwesomeIcon color="white" icon="moon" />
    </Wrapper>
  );
}

function ThemeButton() {
  const [hidden, setHidden] = useState(false);
  const theme = useContext(ThemeContext);

  const scrollListener = event => setHidden(window.pageYOffset > 300);

  useEffect(() => {
    document.addEventListener('scroll', scrollListener);
    return () => document.removeEventListener('scroll', scrollListener);
  }, []);

  const props = useSpring({
    position: 'fixed',
    width: '4rem',
    height: '4rem',
    top: hidden ? '-3.7rem' : '0rem',
    right: 0,
    marginTop: '0.5rem',
    marginRight: '2rem',
  });

  const renderButton = () => {
    return theme.mode === 'light'
      ? <DarkButton onClick={() => {
        setHidden(false);
        theme.setMode('dark');
        localStorage.setItem('mode', 'dark');
      }} />
      : <LightButton onClick={() => {
        setHidden(false);
        theme.setMode('light');
        localStorage.setItem('mode', 'light');
      }} />;
  }

  return (
    <animated.div onMouseEnter={() => setHidden(false)} style={props}>
      {renderButton()}
    </animated.div>
  );
}

export default ThemeButton;
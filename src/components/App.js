import React from 'react';
import Navbar from './Navbar';
import ThemeButton from './ThemeButton';
import About from './About';
import Tools from './Tools';
import styled from 'styled-components';

function App() {
  const AppContainer = styled.div`
    background: ${props => props.theme.background};
    height: 100%;
  `;

  return (
    <AppContainer>
      <Navbar />
      <About />
      <Tools />
      <ThemeButton />
    </AppContainer>
  );
}

export default App;

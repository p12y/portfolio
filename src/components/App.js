import React from 'react';
import Navbar from './Navbar';
import ThemeButton from './ThemeButton';
import About from './About';
import Tools from './Tools';
import styled from 'styled-components';
import media from 'styles/media';

function App() {
  const Main = styled.div`
    padding-left: 4rem;
    ${media.phone`padding-left: 0`}
    height: 100%;
  `;

  return (
    <>
      <Navbar />
      <Main>
        <About />
        <Tools />
        <ThemeButton />
      </Main>
    </>
  );
}

export default App;

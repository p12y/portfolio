import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import ThemeButton from './ThemeButton';
import About from './About';
import Tools from './Tools';
import Work from './work/Work';
import media from 'styles/media';
import Testimonials from 'components/testimonials/Testimonials';

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
        <Work />
        <Testimonials />
        <ThemeButton />
      </Main>
    </>
  );
}

export default App;

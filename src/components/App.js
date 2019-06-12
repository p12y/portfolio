import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import About from './About';
import Tools from './Tools';
import Work from './work/Work';
import ThemeButton from './ThemeButton';
import media from 'styles/media';
import Testimonials from 'components/testimonials/Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';

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
        <CallToAction />
        <Footer />
      </Main>
      <ThemeButton />
    </>
  );
}

export default App;

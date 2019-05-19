import React from 'react';
import Navbar from './Navbar';
import ThemeButton from './ThemeButton';
import About from './About';
import Tools from './Tools';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Tools />
      <ThemeButton />
    </div>
  );
}

export default App;

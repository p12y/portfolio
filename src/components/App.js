import React from 'react';
import Navbar from './Navbar';
import ThemeButton from './ThemeButton';
import About from './About';
import Tools from './Tools';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeButton />
      <About />
      <Tools />
    </div>
  );
}

export default App;

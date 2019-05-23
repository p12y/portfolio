import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../context/ThemeContext';

const themes = {
  light: {
    background: '#fff',
    titleColor: '#333',
    navBackground: '#ddd',
  },
  dark: {
    background: '#202B31',
    titleColor: '#fff',
    navBackground: '#44494c',
  }
};

export default ({ children }) => {
  const [mode, setMode] = useState('light');

  return (
    <ThemeContext.Provider value={{
      setMode,
      mode,
      theme: themes[mode],
    }}>
      <ThemeProvider theme={themes[mode]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
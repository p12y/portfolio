import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from 'context/ThemeContext';

/**
 * Light/dark themes
 */
const themes = {
  light: {
    background: '#fff',
    titleColor: '#333',
    nav: {
      hoverCircle: '#ccc',
      background: '#ddd',
      icon: 'rgb(46, 45, 47)',
    },
  },
  dark: {
    background: 'rgb(46, 45, 47)',
    titleColor: '#fff',
    nav: {
      hoverCircle: '#3c3c3c',
      background: '#4c4c4c',
      icon: '#fff',
    },
  }
};

/**
 * Shared styles that we want accessible in the theme provider
 */
const shared = {
  borderRadius: '4px',
  fonts: {
    title: '"Space Mono", monospace',
    body: '"Open Sans", sans-serif',
  },
};

export default ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.background = themes[mode].background;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{
      setMode,
      mode,
      theme: themes[mode],
    }}>
      <ThemeProvider theme={{ ...shared, ...themes[mode] }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
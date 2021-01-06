import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from 'context/ThemeContext';

/**
 * Light/dark themes
 */
const themes = {
  light: {
    background: 'var(--light-bg-color)',
    titleColor: '#333',
    nav: {
      hoverCircle: '#ccc',
      background: '#ddd',
      icon: 'var(--dark-bg-color)',
    },
    dialog: {
      background: 'var(--light-bg-color)',
    },
  },
  dark: {
    background: 'var(--dark-bg-color)',
    titleColor: '#fff',
    nav: {
      hoverCircle: '#3c3c3c',
      background: '#4c4c4c',
      icon: '#fff',
    },
    dialog: {
      background: '#4c4c4c',
    },
  },
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
  colors: {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    secondaryLighter: 'var(--secondary-lighter)',
  },
};

function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  useEffect(() => {
    document.querySelector('body').style.background = themes[mode].background;
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        setMode,
        mode,
        theme: themes[mode],
      }}
    >
      <ThemeProvider theme={{ mode, ...shared, ...themes[mode] }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default CustomThemeProvider;

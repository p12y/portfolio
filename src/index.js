import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import CustomThemeProvider from './components/CustomThemeProvider';
import App from './components/App';
import './index.css';
import 'icons'; // Imported from icons folder to be re-used in tests

// Add polyfill for Element.scrollIntoView() smooth scroll
smoothscroll.polyfill();

ReactDOM.render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>,
  document.getElementById('root')
);

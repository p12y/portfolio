import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import ThemeProvider from './components/ThemeProvider';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLaptopCode,
  faToolbox,
  faPaperPlane,
  faSun,
  faMoon,
  faLevelDownAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faGitlab,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faLaptopCode,
  faToolbox,
  faPaperPlane,
  faSun,
  faMoon,
  faLevelDownAlt,
  faTimes,
  faGithub,
  faGitlab,
  faInstagram,
);

// Add polyfill for Element.scrollIntoView() smooth scroll
smoothscroll.polyfill();

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLaptopCode,
  faToolbox,
  faPaperPlane,
  faSun,
  faMoon,
  faLevelDownAlt,
  faTimes,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
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
  faExternalLinkAlt,
  faLinkedin
);

configure({ adapter: new Adapter() });

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import { withTheme } from 'setupTests';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withTheme(<App />), div);
});

it('matches snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

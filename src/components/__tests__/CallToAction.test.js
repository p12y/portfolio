import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CallToAction, { Title, Background, Paper } from '../CallToAction';
import { withTheme } from 'setupTests';
import GradientButton from 'components/GradientButton';

const theme = {
  fonts: { title: 'example-font' },
  nav: {
    background: 'nav-example-background',
  },
  titleColor: 'example-title-color',
  background: 'background-example-color',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withTheme(<CallToAction />), div);
});

it('should contain email link', () => {
  const wrap = mount(withTheme(<CallToAction />));
  expect(wrap.find(GradientButton).prop('href')).toEqual(
    'mailto:hello@p12y.com'
  );
});

describe('styled-components', () => {
  describe('Title', () => {
    it('gets font-family from theme', () => {
      const tree = renderer.create(<Title theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule('font-family', 'example-font');
    });
  });

  describe('Background', () => {
    it('gets background from theme', () => {
      const tree = renderer.create(<Background theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule('background', 'nav-example-background');
    });
  });

  describe('Paper', () => {
    it('gets background from theme', () => {
      const tree = renderer.create(<Paper theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule('background', 'example-title-color');
    });

    it('gets text color from theme', () => {
      const tree = renderer.create(<Paper theme={theme} />).toJSON();
      expect(tree).toHaveStyleRule('color', 'background-example-color');
    });
  });
});

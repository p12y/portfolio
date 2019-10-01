import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import About from '../About';
import { withTheme } from 'setupTests';
import NudgeText from 'components/NudgeText';
import NameModal from 'components/NameModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withTheme(<About />), div);
});

it('displays my name', () => {
  const wrap = mount(withTheme(<About />));
  expect(wrap.text()).toContain('Peter Tyldesley');
});

describe('nudge text', () => {
  it('displays name expanation modal on nudge click', () => {
    const wrap = mount(withTheme(<About />));
    let modal = wrap.find(NameModal);
    // Modal should not be open at first
    expect(modal.prop('open')).toEqual(false);
    // Clicking text should open the modal
    wrap.find(NudgeText).simulate('click');
    modal = wrap.find(NameModal);
    expect(modal.prop('open')).toEqual(true);
  });

  it('hides nudge on click', () => {
    const wrap = mount(withTheme(<About />));
    expect(wrap.find(NudgeText)).toHaveLength(1);
    wrap.find(NudgeText).simulate('click');
    expect(wrap.find(NudgeText)).toHaveLength(0);
  });
});

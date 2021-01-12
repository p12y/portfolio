import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Waypoint } from 'react-waypoint';
import About from '../about/About';
import { withTheme } from 'setupTests';
import NudgeText from 'components/NudgeText';
import NameModal from 'components/NameModal';
import DownArrow from 'components/about/DownArrow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withTheme(<About />), div);
});

it('displays my name', () => {
  const wrap = mount(withTheme(<About />));
  expect(wrap.text()).toContain('Pete');
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

describe('down arrow', () => {
  it('displays down arrow before scolling', () => {
    const wrap = mount(withTheme(<About />));
    expect(wrap.find(DownArrow).prop('visible')).toEqual(true);
  });

  it('hides down arrow after scolling down', () => {
    const wrap = mount(withTheme(<About />));
    act(() => {
      wrap
        .find(Waypoint)
        .prop('onPositionChange')
        .call(null, { currentPosition: 'outside' });
    });
    wrap.update();
    expect(wrap.find(DownArrow).prop('visible')).toEqual(false);
  });
});

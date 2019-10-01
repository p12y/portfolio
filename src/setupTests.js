import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import CustomThemeProvider from 'components/CustomThemeProvider';
import 'icons';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

export const withTheme = WrappedComponent => (
  <CustomThemeProvider>{WrappedComponent}</CustomThemeProvider>
);

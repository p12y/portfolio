import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import CustomThemeProvider from '../CustomThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>,
    div
  );
});

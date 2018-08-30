import React from 'react';
import ReactDOM from 'react-dom';
import App_refs from './App_refs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App_refs />, div);
  ReactDOM.unmountComponentAtNode(div);
});

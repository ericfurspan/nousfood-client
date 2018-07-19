import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<App />)
});
import React from 'react';
import ReactDOM from 'react-dom';
import About from '../about';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<About />)
});
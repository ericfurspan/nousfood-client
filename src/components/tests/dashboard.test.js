import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../dashboard';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Dashboard />)
});
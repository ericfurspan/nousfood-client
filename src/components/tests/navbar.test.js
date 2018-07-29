import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../navbar';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<NavBar />)
});
import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../card';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Card />)
});

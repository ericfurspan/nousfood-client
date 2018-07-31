import React from 'react';
import ReactDOM from 'react-dom';
import NotFound  from '../notfound';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<NotFound />)
});

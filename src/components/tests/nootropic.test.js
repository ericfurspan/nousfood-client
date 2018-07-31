import React from 'react';
import ReactDOM from 'react-dom';
import Nootropic  from '../nootropic';
import {shallow} from 'enzyme';

const nootropic = {
    name: 'test',
    how_to_take: 'tester',
    supports: ['123fesf213','fewfff'],
    notes: ['feqfqf', 'erewrewr']
}
it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Nootropic data={nootropic}/>)
});

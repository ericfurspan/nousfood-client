import React from 'react';
import ReactDOM from 'react-dom';
import SavedStacks  from '../saved-stacks';
import {shallow} from 'enzyme';
import { StackData } from '../../assets/data/stack-data';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<SavedStacks savedStacks={StackData} hidden={true}/>)
});

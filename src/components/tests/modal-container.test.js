import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from '../modal-container';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<ModalContainer />)
});

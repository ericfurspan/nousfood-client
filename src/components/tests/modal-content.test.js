import React from 'react';
import ReactDOM from 'react-dom';
import ModalContent from '../modal-content';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<ModalContent />)
});

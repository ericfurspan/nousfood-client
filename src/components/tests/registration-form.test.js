import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from '../registration-form';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<RegistrationForm />)
});
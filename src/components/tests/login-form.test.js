import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../login-form';
import {shallow} from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<LoginForm />)
});
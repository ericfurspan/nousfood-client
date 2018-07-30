import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../login-form';
import { shallow, mount } from 'enzyme';
import login from '../../actions/auth';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<LoginForm />)
});

/*
it('Dispatches login action', () => {
    const dispatch = jest.fn();
    const username = 'testuser';
    const password = 'testpassword'
    const wrapper = shallow(
        <LoginForm dispatch={dispatch} />
    );
    const instance = wrapper.instance();
    expect(dispatch).toHaveBeenCalledWith(login(username, password));
});
*/
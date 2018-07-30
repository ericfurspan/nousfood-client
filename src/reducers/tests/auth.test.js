import React from 'react';
import ReactDOM from 'react-dom';
import authReducer from '../auth';
import { 
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError 
} from '../../actions/auth';


const mockToken = 'fean2u4hr289hfefklel2f32425r2'
const mockUser = {
    username: 'Testguy'
}
const mockError = {message: 'Failure'}

describe('setAuthToken', () => {
    it('Should set auth token', () => {
        let state = {
            token: null
        }
        state = authReducer(state, setAuthToken(mockToken));
        expect(state).toEqual({
            token: mockToken
        });
    });
});
describe('clearAuth', () => {
    it('Should clear auth token', () => {
        let state = {
            token: mockToken,
            currentUser: mockUser
        }
        state = authReducer(state, clearAuth());
        expect(state).toEqual({
            token: null,
            currentUser: null
        });
    });
});
describe('authRequest', () => {
    it('Should initiate auth request', () => {
        let state = {
            loading: false,
            error: null
        }
        state = authReducer(state, authRequest());
        expect(state).toEqual({
            loading: true,
            error: null
        });
    });
});
describe('authSuccess', () => {
    it('Should indicate auth success', () => {
        let state = {
            loading: true,
            currentUser: null,
            error: null
        }
        state = authReducer(state, authSuccess(mockUser));
        expect(state).toEqual({
            loading: false,
            currentUser: mockUser,
            error: null
        });
    });
});
describe('authError', () => {
    it('Should indicate auth error', () => {
        let state = {
            loading: true,
            currentUser: null,
            error: null
        }
        state = authReducer(state, authError(mockError));
        expect(state).toEqual({
            loading: false,
            currentUser: null,
            error: mockError.message
        });
    });
});
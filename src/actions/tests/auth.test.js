import React from 'react';
import ReactDOM from 'react-dom';
import { AUTH_REQUEST,
         AUTH_SUCCESS,
         AUTH_ERROR,
         CLEAR_AUTH,
         REFRESH_AUTH_TOKEN,
         authRequest,
         authSuccess,
         authError,
         clearAuth,
         refreshAuthToken
       } 
from '../auth';

describe('auth', () => {
    it('Should return the AUTH_REQUEST action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
    it('Should return the AUTH_SUCCESS action', () => {
        const action = authSuccess();
        expect(action.type).toEqual(AUTH_SUCCESS);
    });
    it('Should return the AUTH_ERROR action', () => {
        const action = authError();
        expect(action.type).toEqual(AUTH_ERROR);
    });
    it('Should return the CLEAR_AUTH action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    });
    it('Should return the REFRESH_AUTH_TOKEN action', () => {
        const action = refreshAuthToken();
        expect(action.type).toEqual(REFRESH_AUTH_TOKEN);
    });
});
import React from 'react';
import ReactDOM from 'react-dom';
import { FETCH_NOOTROPICS_SUCCESS,
         FETCH_NOOTROPICS_ERROR,
         FETCH_TRENDING_STACKS_SUCCESS,
         FETCH_TRENDING_STACKS_ERROR,
         fetchNootropicsSuccess,
         fetchNootropicsError,
         fetchTrendingStacksSuccess,
         fetchTrendingStacksError
       } 
from '../global';

describe('global', () => {
    it('Should return the FETCH_NOOTROPICS_SUCCESS action', () => {
        const action = fetchNootropicsSuccess();
        expect(action.type).toEqual(FETCH_NOOTROPICS_SUCCESS);
    });
    it('Should return the FETCH_NOOTROPICS_ERROR action', () => {
        const action = fetchNootropicsError();
        expect(action.type).toEqual(FETCH_NOOTROPICS_ERROR);
    });
    it('Should return the FETCH_TRENDING_STACKS_SUCCESS action', () => {
        const action = fetchTrendingStacksSuccess();
        expect(action.type).toEqual(FETCH_TRENDING_STACKS_SUCCESS);
    });
    it('Should return the FETCH_TRENDING_STACKS_ERROR action', () => {
        const action = fetchTrendingStacksError();
        expect(action.type).toEqual(FETCH_TRENDING_STACKS_ERROR);
    });
});
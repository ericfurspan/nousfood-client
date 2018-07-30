import React from 'react';
import ReactDOM from 'react-dom';
import globalReducer from '../global';
import { 
    fetchNootropicsSuccess,
    fetchNootropicsError,
    fetchTrendingStacksSuccess,
    fetchTrendingStacksError 
} from '../../actions/global';
import { NootropicData } from '../../assets/data/nootropic-data';
import { StackData } from '../../assets/data/stack-data';

const mockError = {message: 'Failure'}


describe('fetchNootropicsSuccess', () => {
    it('Should return nootropic data', () => {
        let state = {
            nootropics: null,
            error: null
        }
        state = globalReducer(state, fetchNootropicsSuccess(NootropicData));
        expect(state).toEqual({
            nootropics: NootropicData,
            error: null
        });
    });
});
describe('fetchNootropicsError', () => {
    it('Should return error getting nootropics', () => {
        let state = {
            nootropics: null,
            error: null
        }
        state = globalReducer(state, fetchNootropicsError(mockError));
        expect(state).toEqual({
            nootropics: null,
            error: mockError.message
        });
    });
});
describe('fetchTrendingStacksSuccess', () => {
    it('Should return trending stacks', () => {
        let state = {
            stackLibrary: null,
            error: null
        }
        state = globalReducer(state, fetchTrendingStacksSuccess(StackData));
        expect(state).toEqual({
            stackLibrary: StackData,
            error: null
        });
    });
});
describe('fetchTrendingStacksError', () => {
    it('Should return error getting stacks', () => {
        let state = {
            stackLibrary: null,
            error: null
        }
        state = globalReducer(state, fetchTrendingStacksError(mockError));
        expect(state).toEqual({
            stackLibrary: null,
            error: mockError.message
        });
    });
});
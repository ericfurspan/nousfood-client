import React from 'react';
import ReactDOM from 'react-dom';
import userReducer from '../user';
import { 
    emptyUserData,
    fetchUserDataSuccess,
    fetchUserDataError,
    saveValues,
    createStackRequest,
    createStackSuccess,
    createStackError,
    saveStackSuccess,
    saveStackError,
    deleteStackSuccess,
    deleteStackError,
    createPublicStackRequest,
    createPublicStackSuccess,
    createPublicStackError,
    deletePublicStackRequest,
    deletePublicStackSuccess,
    deletePublicStackError,
    saveStackRequest
} from '../../actions/user';
import { StackData } from '../../assets/data/stack-data';

const mockError = {message: 'Failure'}
const mockAccount = {
    email: 'testguy@test.com',
    firstname: 'tester',
    lastname: 'guy',
    username: 'Testguy',
    password: 'egst34h53uh53it'
}
const mockUserData = {
    ...mockAccount,
    saved_stacks: StackData
}
const mockTempStack = {
    author: 'tester',
    name: 'teststack',
    description: 'testdesc',
    directive: 'test directive',
    contents: [{}],
    code: 'xyzabc123'
}

describe('emptyUserData', () => {
    it('Should empty user data', () => {
        let state = {
            account: mockAccount,
            savedStacks: StackData
        }
        state = userReducer(state, emptyUserData());
        expect(state).toEqual({
            account: null,
            savedStacks: null
        });
    });
});
describe('fetchUserDataSuccess', () => {
    it('Should return user data', () => {
        let state = {
            account: null,
            savedStacks: null,
            error: null,
            loading: true
        }
        state = userReducer(state, fetchUserDataSuccess(mockUserData));
        expect(state).toEqual({
            account: mockAccount,
            savedStacks: StackData,
            error: null,
            loading: false
        });
    });
});
describe('fetchUserDataError', () => {
    it('Should return error', () => {
        let state = {
            feedback: null,
            error: null
        }
        state = userReducer(state, fetchUserDataError(mockError));
        expect(state).toEqual({
            feedback: {type: 'error', message: mockError.message},
            error: mockError.message
        });
    });
});
describe('saveValues', () => {
    it('Should return updated temp stack', () => {
        let state = {
            tempStack: null
        }
        state = userReducer(state, saveValues(mockTempStack));
        expect(state).toEqual({
            tempStack: mockTempStack
        });
    });
});
describe('createStackRequest', () => {
    it('Should initiate stack request', () => {
        let state = {
            loading: false
        }
        state = userReducer(state, createStackRequest());
        expect(state).toEqual({
            loading: true
        });
    });
});



import React from 'react';
import ReactDOM from 'react-dom';
import { EMPTY_USER_DATA,
         FETCH_USER_DATA_SUCCESS,
         FETCH_USER_DATA_ERROR,
         SAVE_VALUES,
         CREATE_STACK_REQUEST,
         CREATE_STACK_SUCCESS,
         CREATE_STACK_ERROR,
         SAVE_STACK_SUCCESS,
         SAVE_STACK_ERROR,
         DELETE_STACK_SUCCESS,
         DELETE_STACK_ERROR,
         CREATE_PUBLIC_STACK_REQUEST,
         CREATE_PUBLIC_STACK_SUCCESS,
         CREATE_PUBLIC_STACK_ERROR,
         DELETE_PUBLIC_STACK_REQUEST,
         DELETE_PUBLIC_STACK_SUCCESS,
         DELETE_PUBLIC_STACK_ERROR,
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
       } 
from '../user';

describe('user', () => {
    it('Should return the EMPTY_USER_DATA action', () => {
        const action = emptyUserData();
        expect(action.type).toEqual(EMPTY_USER_DATA);
    });
    it('Should return the FETCH_USER_DATA_SUCCESS action', () => {
        const action = fetchUserDataSuccess();
        expect(action.type).toEqual(FETCH_USER_DATA_SUCCESS);
    });
    it('Should return the FETCH_USER_DATA_ERROR action', () => {
        const action = fetchUserDataError();
        expect(action.type).toEqual(FETCH_USER_DATA_ERROR);
    });
    it('Should return the SAVE_VALUES action', () => {
        const action = saveValues();
        expect(action.type).toEqual(SAVE_VALUES);
    });

    it('Should return the CREATE_STACK_REQUEST action', () => {
        const action = createStackRequest();
        expect(action.type).toEqual(CREATE_STACK_REQUEST);
    });
    it('Should return the CREATE_STACK_SUCCESS action', () => {
        const action = createStackSuccess();
        expect(action.type).toEqual(CREATE_STACK_SUCCESS);
    });
    it('Should return the CREATE_STACK_ERROR action', () => {
        const action = createStackError();
        expect(action.type).toEqual(CREATE_STACK_ERROR);
    });
    it('Should return the SAVE_STACK_SUCCESS action', () => {
        const action = saveStackSuccess();
        expect(action.type).toEqual(SAVE_STACK_SUCCESS);
    });
    it('Should return the SAVE_STACK_ERROR action', () => {
        const action = saveStackError();
        expect(action.type).toEqual(SAVE_STACK_ERROR);
    });
    it('Should return the DELETE_STACK_SUCCESS action', () => {
        const action = deleteStackSuccess();
        expect(action.type).toEqual(DELETE_STACK_SUCCESS);
    });
    it('Should return the DELETE_STACK_ERROR action', () => {
        const action = deleteStackError();
        expect(action.type).toEqual(DELETE_STACK_ERROR);
    });
    it('Should return the CREATE_PUBLIC_STACK_REQUEST action', () => {
        const action = createPublicStackRequest();
        expect(action.type).toEqual(CREATE_PUBLIC_STACK_REQUEST);
    });
    it('Should return the CREATE_PUBLIC_STACK_SUCCESS action', () => {
        const action = createPublicStackSuccess();
        expect(action.type).toEqual(CREATE_PUBLIC_STACK_SUCCESS);
    });
    it('Should return the CREATE_PUBLIC_STACK_ERROR action', () => {
        const action = createPublicStackError();
        expect(action.type).toEqual(CREATE_PUBLIC_STACK_ERROR);
    });
    it('Should return the DELETE_PUBLIC_STACK_REQUEST action', () => {
        const action = deletePublicStackRequest();
        expect(action.type).toEqual(DELETE_PUBLIC_STACK_REQUEST);
    });
    it('Should return the DELETE_PUBLIC_STACK_SUCCESS action', () => {
        const action = deletePublicStackSuccess();
        expect(action.type).toEqual(DELETE_PUBLIC_STACK_SUCCESS);
    });
    it('Should return the DELETE_PUBLIC_STACK_ERROR action', () => {
        const action = deletePublicStackError();
        expect(action.type).toEqual(DELETE_PUBLIC_STACK_ERROR);
    });
});
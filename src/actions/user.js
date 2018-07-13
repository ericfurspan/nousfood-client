import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const fetchUserDataSuccess = data => ({
    type: FETCH_USER_DATA_SUCCESS,
    data
});
export const FETCH_USER_DATA_ERROR = 'FETCH_USER_DATA_ERROR';
export const fetchUserDataError= data => ({
    type: FETCH_USER_DATA_ERROR,
    data
});

export const ADD_NOOP_TO_TEMP_STACK_SUCCESS = 'ADD_NOOP_TO_TEMP_STACK_SUCCESS';
export const addNoopToTempStackSuccess = data => ({
    type: ADD_NOOP_TO_TEMP_STACK_SUCCESS,
    data
});
export const ADD_NOOP_TO_TEMP_STACK_ERROR = 'ADD_NOOP_TO_TEMP_STACK_ERROR';
export const addNoopToTempStackError = data => ({
    type: ADD_NOOP_TO_TEMP_STACK_ERROR,
    data
});

export const fetchUserData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken)
    return fetch(`${API_BASE_URL}/user`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchUserDataSuccess(data)))
        .catch(err => {
            dispatch(fetchUserDataError(err));
        });
};

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_NOOTROPICS_SUCCESS = 'FETCH_NOOTROPICS_SUCCESS';
export const fetchNootropicsSuccess = data => ({
    type: FETCH_NOOTROPICS_SUCCESS,
    data
});

export const FETCH_NOOTROPICS_ERROR = 'FETCH_NOOTROPICS_ERROR';
export const fetchNootropicsError = error => ({
    type: FETCH_NOOTROPICS_ERROR,
    error
});

export const FETCH_TRENDING_STACKS_SUCCESS = 'FETCH_TRENDING_STACKS_SUCCESS';
export const fetchTrendingStacksSuccess = data => ({
    type: FETCH_TRENDING_STACKS_SUCCESS,
    data
});

export const FETCH_TRENDING_STACKS_ERROR = 'FETCH_TRENDING_STACKS_ERROR';
export const fetchTrendingStacksError = error => ({
    type: FETCH_TRENDING_STACKS_ERROR,
    error
});

export const fetchTrendingStacks = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/stacks`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchTrendingStacksSuccess(data)))
        .catch(err => {
            console.log(err)
            dispatch(fetchTrendingStacksError(err));
        });
};

export const fetchNootropics = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/nootropics`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchNootropicsSuccess(data)))
        .catch(err => {
            console.log(err)
            dispatch(fetchNootropicsError(err));
        });
};

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const DISMISS_FEEDBACK = 'DISMISS_FEEDBACK';
export const dismissFeedback = () => ({
    type: DISMISS_FEEDBACK,
})

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

export const SAVE_VALUES= 'SAVE_VALUES';
export const saveValues = data => ({
    type: SAVE_VALUES,
    data
});

export const BUILD_STACK_SUCCESS = 'BUILD_STACK_SUCCESS';
export const buildStackSuccess = data => ({
    type: BUILD_STACK_SUCCESS,
    data
})

export const BUILD_STACK_ERROR = 'BUILD_STACK_ERROR';
export const buildStackError = error => ({
    type: BUILD_STACK_ERROR,
    error
})

export const SAVE_STACK_SUCCESS = 'SAVE_STACK_SUCCESS';
export const saveStackSuccess = data => ({
    type: SAVE_STACK_SUCCESS,
    data
})

export const SAVE_STACK_ERROR = 'SAVE_STACK_ERROR';
export const saveStackError = error => ({
    type: SAVE_STACK_ERROR,
    error
})

export const DELETE_STACK_SUCCESS = 'DELETE_STACK_SUCCESS';
export const deleteStackSuccess = data => ({
    type: DELETE_STACK_SUCCESS,
    data
})

export const DELETE_STACK_ERROR = 'DELETE_STACK_ERROR';
export const deleteStackError = error => ({
    type: DELETE_STACK_ERROR,
    error
})

export const saveStack = (data) => (dispatch, getState) => {
    dispatch(saveStackSuccess(data))
}

export const deleteStack = (data) => (dispatch, getState) => {
    dispatch(deleteStackSuccess(data))
}

export const buildStack = (data) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const code = Math.random().toString(36).substring(5);
    const author = getState().user.account.username;
    const stackData = {
        ...data,
        code,
        author
    }
    /* uncomment after adding authentication and API routes
    return fetch(`${API_BASE_URL}/user/${author}/stacks`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(buildStackSuccess(data)))
        .catch(err => {
            dispatch(buildStackSuccess(err));
        });
    */
   dispatch(buildStackSuccess(stackData))
};

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
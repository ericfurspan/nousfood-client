import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchTrendingStacks} from './global';

export const EMPTY_USER_DATA = 'EMPTY_USER_DATA';
export const emptyUserData = () => ({
    type: EMPTY_USER_DATA
})

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
export const fetchUserDataError = error => ({
    type: FETCH_USER_DATA_ERROR,
    error
});

export const SAVE_VALUES = 'SAVE_VALUES';
export const saveValues = data => ({
    type: SAVE_VALUES,
    data
});

export const CREATE_STACK_REQUEST = 'CREATE_STACK_REQUEST';
export const createStackRequest = () => ({
    type: CREATE_STACK_REQUEST
});

export const CREATE_STACK_SUCCESS = 'CREATE_STACK_SUCCESS';
export const createStackSuccess = data => ({
    type: CREATE_STACK_SUCCESS,
    data
});

export const CREATE_STACK_ERROR = 'CREATE_STACK_ERROR';
export const createStackError = error => ({
    type: CREATE_STACK_ERROR,
    error
});

export const SAVE_STACK_REQUEST = 'SAVE_STACK_REQUEST';
export const saveStackRequest = () => ({
    type: SAVE_STACK_REQUEST
});

export const SAVE_STACK_SUCCESS = 'SAVE_STACK_SUCCESS';
export const saveStackSuccess = data => ({
    type: SAVE_STACK_SUCCESS,
    data
});

export const SAVE_STACK_ERROR = 'SAVE_STACK_ERROR';
export const saveStackError = error => ({
    type: SAVE_STACK_ERROR,
    error
})

export const DELETE_STACK_SUCCESS = 'DELETE_STACK_SUCCESS';
export const deleteStackSuccess = () => ({
    type: DELETE_STACK_SUCCESS
})

export const DELETE_STACK_ERROR = 'DELETE_STACK_ERROR';
export const deleteStackError = error => ({
    type: DELETE_STACK_ERROR,
    error
})

export const CREATE_PUBLIC_STACK_REQUEST = 'CREATE_PUBLIC_STACK_REQUEST';
export const createPublicStackRequest = () => ({
    type: CREATE_PUBLIC_STACK_REQUEST
});

export const CREATE_PUBLIC_STACK_SUCCESS = 'CREATE_PUBLIC_STACK_SUCCESS';
export const createPublicStackSuccess = () => ({
    type: CREATE_PUBLIC_STACK_SUCCESS
});

export const CREATE_PUBLIC_STACK_ERROR = 'CREATE_PUBLIC_STACK_ERROR';
export const createPublicStackError = error => ({
    type: CREATE_PUBLIC_STACK_ERROR,
    error
})

export const DELETE_PUBLIC_STACK_REQUEST = 'DELETE_PUBLIC_STACK_REQUEST';
export const deletePublicStackRequest = () => ({
    type: DELETE_PUBLIC_STACK_REQUEST
});

export const DELETE_PUBLIC_STACK_SUCCESS = 'DELETE_PUBLIC_STACK_SUCCESS';
export const deletePublicStackSuccess = () => ({
    type: DELETE_PUBLIC_STACK_SUCCESS
});

export const DELETE_PUBLIC_STACK_ERROR = 'DELETE_PUBLIC_STACK_ERROR';
export const deletePublicStackError = error => ({
    type: DELETE_PUBLIC_STACK_ERROR,
    error
})


// GET stack from /api/stacks/${code}
// then POST stack data to /api/{username}/stacks
export const saveStack = ({code}) => (dispatch, getState) => {
    dispatch(saveStackRequest());
    return fetch(`${API_BASE_URL}/stacks/${code}`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            return dispatch(createStack(data, code))
        })
        .then(() => dispatch(saveStackSuccess()))
        .then(() => dispatch(fetchUserData()))
        .catch(err => dispatch(saveStackError(err)))
}

export const createPublicStack = (data) => (dispatch, getState) => {
    dispatch(createPublicStackRequest());
    const token = getState().auth.token;  
    delete data['_id'] // remove _id to avoid MongoDB error
    return fetch(`${API_BASE_URL}/stacks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(createPublicStackSuccess()))
        .then(() => dispatch(fetchTrendingStacks()))
        .catch(err => dispatch(createPublicStackError(err)));
};

export const deletePublicStack = (code, author) => (dispatch, getState) => {
    dispatch(deletePublicStackRequest());
    const username = getState().auth.currentUser.username;
    if(author !== username) {
        console.log('Sorry, you are not the Stack author')
        return dispatch(deletePublicStackError('Sorry, you are not the Stack author'))
    } else {
        const token = getState().auth.token;  
        return fetch(`${API_BASE_URL}/stacks/${code}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(() => dispatch(deletePublicStackSuccess()))
            .then(() => dispatch(fetchTrendingStacks()))
            .catch(err => dispatch(deletePublicStackError(err)));
    }
};

export const createStack = (data, code) => (dispatch, getState) => {
    dispatch(createStackRequest());
    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;
    const stackData = {
        ...data,
        code: data.code || Math.random().toString(36).substring(5),
        author: data.author || username
    }
    return fetch(`${API_BASE_URL}/${username}/stacks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(stackData)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(createStackSuccess(data)))
        .catch(err => dispatch(createStackError(err)));
};

export const deleteStack = (code) => (dispatch, getState) => {
    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;

    return fetch(`${API_BASE_URL}/${username}/stacks/${code}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(() => dispatch(deleteStackSuccess()))
        .then(() => dispatch(fetchUserData()))
        .catch(err => dispatch(deleteStackError(err)))
}

export const fetchUserData = () => (dispatch, getState) => {
    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/${username}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchUserDataSuccess(data)))
        .catch(err => dispatch(fetchUserDataError(err)));
};
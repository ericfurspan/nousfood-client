

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
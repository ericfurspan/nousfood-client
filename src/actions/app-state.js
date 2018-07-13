
export const FETCH_APP_STATE_SUCCESS = 'FETCH_APP_STATE_SUCCESS';
export const fetchAppStateSuccess = data => ({
    type: FETCH_APP_STATE_SUCCESS,
    data
});

export const FETCH_APP_STATE_ERROR = 'FETCH_APP_STATE_ERROR';
export const fetchAppStateError= data => ({
    type: FETCH_APP_STATE_ERROR,
    data
});
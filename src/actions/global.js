

export const FETCH_GLOBAL_DATA_SUCCESS = 'FETCH_GLOBAL_DATA_SUCCESS';
export const fetchGlobalDataSuccess = data => ({
    type: FETCH_GLOBAL_DATA_SUCCESS,
    data
});

export const FETCH_GLOBAL_DATA_ERROR = 'FETCH_GLOBAL_DATA_ERROR';
export const fetchGlobalDataError= data => ({
    type: FETCH_GLOBAL_DATA_ERROR,
    data
});
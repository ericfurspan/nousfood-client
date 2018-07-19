import {
    FETCH_APP_STATE_SUCCESS,
    FETCH_APP_STATE_ERROR
} from '../actions/app-state';

const initialState = {
    appDrawer: {
        right: true
    }
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_APP_STATE_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_APP_STATE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
import {
    FETCH_GLOBAL_DATA_SUCCESS,
    FETCH_GLOBAL_DATA_ERROR
} from '../actions/global';

import { StackData } from '../assets/data/stack-data';
import { NootropicData } from '../assets/data/nootropic-data';

const initialState = {
    stackLibrary: StackData,
    nootropicLibrary: NootropicData
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_GLOBAL_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_GLOBAL_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
import {
    FETCH_NOOTROPICS_SUCCESS,
    FETCH_NOOTROPICS_ERROR,
    FETCH_TRENDING_STACKS_SUCCESS,
    FETCH_TRENDING_STACKS_ERROR
} from '../actions/global';

//import { StackData } from '../assets/data/stack-data';
//import { NootropicData } from '../assets/data/nootropic-data';

const initialState = {
    stackLibrary: null,
    nootropics: null,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_NOOTROPICS_SUCCESS) {
        return Object.assign({}, state, {
            nootropics: action.data,
            error: null
        });
    } else if (action.type === FETCH_NOOTROPICS_ERROR) {
        return Object.assign({}, state, {
            error: action.error.message
        });
    }
    if (action.type === FETCH_TRENDING_STACKS_SUCCESS) {
        return Object.assign({}, state, {
            stackLibrary: action.data,
            error: null
        });
    } else if (action.type === FETCH_TRENDING_STACKS_ERROR) {
        return Object.assign({}, state, {
            error: action.error.message
        });
    }
    return state;
}
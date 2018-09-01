import {
    FETCH_NOOTROPIC_SCIENCE_REQUEST,
    FETCH_NOOTROPIC_SCIENCE_SUCCESS,
    FETCH_NOOTROPIC_SCIENCE_ERROR
} from '../actions/nlm';


const initialState = {
    nootropics: null,
    error: null,
    loading: true
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_NOOTROPIC_SCIENCE_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === FETCH_NOOTROPIC_SCIENCE_SUCCESS) {
        let nootropics;
        if(state.nootropics) {
            //if nootropic already exists, do not add to state
            let duplicate = state.nootropics.find(noop => Object.keys(noop)[0] == Object.keys(action.data)[0])
            if(duplicate) {
                nootropics = [...state.nootropics]
            } else {
                nootropics = [...state.nootropics, action.data]
            }
        } else {
            nootropics = [action.data]
        }
        return Object.assign({}, state, {
            nootropics,
            error: null,
            loading: false
        });
    } else if (action.type === FETCH_NOOTROPIC_SCIENCE_ERROR) {
        return Object.assign({}, state, {
            error: action.error.message
        });
    }
    return state;
}
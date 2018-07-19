import {
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR,
    SAVE_VALUES,
    BUILD_STACK_SUCCESS,
    BUILD_STACK_ERROR,
    SAVE_STACK_SUCCESS,
    SAVE_STACK_ERROR,
    DELETE_STACK_SUCCESS,
    DELETE_STACK_ERROR,
    DISMISS_FEEDBACK
} from '../actions/user';

const initialState = {
    account: {
        username: "Quanda",
        firstname: "Eric",
        lastname: "Furspan",
        email: "eric.furspan@gmail.com",
        password: "wqejqnwejn1j3414"
    },
    savedStacks: [
        {
            author: "Quanda",
            code: "mmj",
            name: "Monday morning jump",
            contents: [
                "L-Theanine",
                "Caffeine",
                "Adrafinil"
            ],
            description: "",
            directive: ""
        },
        {
            author: "",
            code: "calm",
            name: "Evening calm",
            contents: [
                "L-Theanine"
            ],
            description: "",
            directive: ""
        }
    ],
    tempStack: {
        author: "",
        name: "",
        description: "",
        directive: "",
        contents: [],
        code: ""
    },
    feedback: null
};

export default (state = initialState, action) => {
    if (action.type === FETCH_USER_DATA_SUCCESS) {
        return Object.assign({}, state, {
            user: action.data,
            error: null
        });
    } else if (action.type === FETCH_USER_DATA_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error}
        });
    }else if(action.type === SAVE_VALUES) {
        return Object.assign({}, state, {
            tempStack: action.data
        });
    }
    else if(action.type === BUILD_STACK_SUCCESS) {
        
        return Object.assign({}, state, {
            savedStacks: [...state.savedStacks, action.data],
            feedback: {type: 'success', message: 'Stack created successfully'}
        });
    }
    else if(action.type === BUILD_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error}
        });
    }
    else if(action.type === SAVE_STACK_SUCCESS) {
        return Object.assign({}, state, {
            feedback: {type: 'success', message: 'Saved Successfully'}
        });
    }
    else if(action.type === SAVE_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error}
        });
    }
    else if(action.type === DELETE_STACK_SUCCESS) {
        return Object.assign({}, state, {
            feedback: {type: 'success', message: 'Deleted Successfully'}
        });
    }
    else if(action.type === DELETE_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error}
        });
    }
    else if(action.type === DISMISS_FEEDBACK) {
        return Object.assign({}, state, {
            feedback: null
        });
    }
    return state;
}


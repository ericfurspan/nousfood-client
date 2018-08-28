import {
    EMPTY_USER_DATA,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR,
    SAVE_VALUES,
    FETCH_STACK_REQUEST,
    FETCH_STACK_SUCCESS,
    FETCH_STACK_ERROR,
    CREATE_STACK_REQUEST,
    CREATE_STACK_SUCCESS,
    CREATE_STACK_ERROR,
    SAVE_STACK_REQUEST,
    SAVE_STACK_SUCCESS,
    SAVE_STACK_ERROR,
    DELETE_STACK_SUCCESS,
    DELETE_STACK_ERROR,
    DISMISS_FEEDBACK,
    CREATE_PUBLIC_STACK_REQUEST,
    CREATE_PUBLIC_STACK_SUCCESS,
    CREATE_PUBLIC_STACK_ERROR,
    DELETE_PUBLIC_STACK_REQUEST,
    DELETE_PUBLIC_STACK_SUCCESS,
    DELETE_PUBLIC_STACK_ERROR,
    UPDATE_STACK_REQUEST,
    UPDATE_STACK_SUCCESS,
    UPDATE_STACK_ERROR,
    COPY_SHARE_URL
} from '../actions/user';

const initialState = {
    account: {
        username: null,
        firstname: null,
        lastname: null,
        email: null,
        password: null
    },
    savedStacks: null,
    tempStack: {
        author: null,
        name: null,
        description: null,
        directive: null,
        contents: null,
        code: null
    },
    shared: {
        stack: null
    },
    error: null,
    feedback: null,
    loading: true
};

export default (state = initialState, action) => {
    if (action.type === FETCH_USER_DATA_SUCCESS) {
        return Object.assign({}, state, {
            account: {
                username: action.data.username,
                firstname: action.data.firstname,
                lastname: action.data.lastname,
                email: action.data.email,
                password: action.data.password,
            },
            savedStacks: action.data.saved_stacks,
            error: null,
            loading: false
        });
    
    } 
    else if(action.type === EMPTY_USER_DATA) {
        return Object.assign({}, state, {
            account: null,
            savedStacks: null
        });
    }
    else if (action.type === FETCH_USER_DATA_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error.message},
            error: action.error.message
        });
    }else if(action.type === SAVE_VALUES) {
        return Object.assign({}, state, {
            tempStack: action.data
        });
    }
    else if(action.type === FETCH_STACK_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === FETCH_STACK_SUCCESS) {
        return Object.assign({}, state, {
            shared: {stack: action.data},
            error: null,
            loading: false
        });
    }
    else if(action.type === FETCH_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error.message},
            error: action.error.message,
            loading: false
        });
    }
    else if(action.type === CREATE_STACK_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === CREATE_STACK_SUCCESS) {
        let savedStacks;
        if(state.saved_stacks) {
            savedStacks = [...state.saved_stacks, action.data]
        } else {
            savedStacks = [action.data]
        }
        return Object.assign({}, state, {
            savedStacks,
            feedback: {type: 'success', message: 'Stack created successfully'},
            error: null,
            loading: false
        });
    }
    else if(action.type === CREATE_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error.message},
            error: action.error.message,
            loading: false
        });
    }
    else if(action.type === SAVE_STACK_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === SAVE_STACK_SUCCESS) {
        return Object.assign({}, state, {
            feedback: {type: 'success', message: 'Saved Successfully'},
            loading: false,
            error: null
        });
    }
    else if(action.type === SAVE_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error.message},
            error: action.error.message,
            loading: false
        });
    }
    else if(action.type === DELETE_STACK_SUCCESS) {
        return Object.assign({}, state, {
            feedback: {type: 'success', message: 'Deleted Successfully'},
            loading: false,
            error: null
        });
    }
    else if(action.type === DELETE_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error.message},
            error: action.error.message,
            loading: false
        });
    }
    else if(action.type === DISMISS_FEEDBACK) {
        return Object.assign({}, state, {
            feedback: null
        });
    }
    else if(action.type === CREATE_PUBLIC_STACK_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === CREATE_PUBLIC_STACK_SUCCESS) {
        return Object.assign({}, state, {
            feedback: {type: 'success', message: 'Stack made public'},
            error: null,
            loading: false
        });
    }
    else if(action.type === CREATE_PUBLIC_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error.message},
            error: action.error.message,
            loading: false
        });
    }
    else if(action.type === DELETE_PUBLIC_STACK_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === DELETE_PUBLIC_STACK_SUCCESS) {
        return Object.assign({}, state, {
            feedback: {type: 'success', message: 'Stack removed from public'},
            error: null,
            loading: false
        });
    }
    else if(action.type === DELETE_PUBLIC_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error.message},
            error: action.error.message,
            loading: false
        });
    }
    else if(action.type === UPDATE_STACK_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === UPDATE_STACK_SUCCESS) {
        return Object.assign({}, state, {
            feedback: {type: 'success', message: 'Stack has been updated'},
            error: null,
            loading: false
        });
    }
    else if(action.type === UPDATE_STACK_ERROR) {
        return Object.assign({}, state, {
            feedback: {type: 'error', message: action.error.message},
            error: action.error.message,
            loading: false
        });
    }
    else if(action.type === COPY_SHARE_URL) {
        return Object.assign({}, state, {
            feedback: {type: 'notification', message: 'Copied to clipboard'},
        });
    }
    return state;
}


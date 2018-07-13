import {
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR,
    ADD_NOOP_TO_TEMP_STACK_SUCCESS,
    ADD_NOOP_TO_TEMP_STACK_ERROR
} from '../actions/user';

const initialState = {
    user: {
        account: {
            username: "Quanda",
            firstname: "Eric",
            lastname: "Furspan",
            email: "eric.furspan@gmail.com",
            password: "wqejqnwejn1j3414"
        },
        saved: {
            stacks: [
                {
                   code: "mmj",
                   name: "Monday morning jump",
                   contents: [
                       "L-Theanine",
                       "Caffeine",
                       "Adrafinil"
                   ]
                },
                {
                    code: "calm",
                    name: "Evening calm",
                    contents: [
                        "L-Theanine"
                    ]
                 }
            ]
        },
        tempStack: {
            name: "",
            contents: [

            ]
        }
    },
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_USER_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_USER_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === ADD_NOOP_TO_TEMP_STACK_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        })
    } else if (action.type === ADD_NOOP_TO_TEMP_STACK_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    }
    return state;
}

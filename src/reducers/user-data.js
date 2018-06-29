import {
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR
} from '../actions/user-data';

const initialState = {
    user: {
        userInfo: {
            firstname: "Eric",
            lastname: "Furspan",
            email: "eric.furspan@gmail.com",
            password: "wqejqnwejn1j3414"
        },
        saved: {
            nootropics: [
                {
                    code: "gnko",
                    name: "Ginkgo Biloba",
                    substance: "Plant",
                    suggested_dosage: "",
                    personal_dosage: ""
                },
                {
                    code: "panx",
                    name: "Panax Ginseng",
                    substance: "Plant",
                    suggested_dosage: "",
                    personal_dosage: "",
                }
            ],
            stacks: [
                {
                   title: "Monday morning jump",
                   contents: [
                       "L-Theanine",
                       "Caffeine",
                       "Adrafinil"
                   ]
                }
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
    }
    return state;
}

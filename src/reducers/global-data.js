import {
    FETCH_GLOBAL_DATA_SUCCESS,
    FETCH_GLOBAL_DATA_ERROR
} from '../actions/global-data';

const initialState = {
    trendingStacks: [
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
import {
    FETCH_GLOBAL_DATA_SUCCESS,
    FETCH_GLOBAL_DATA_ERROR
} from '../actions/global';

const initialState = {
    stackLibrary: [
        {
            code: "mmj",
            name: "Monday morning surge",
            contents: [
                "L-Theanine",
                "Caffeine",
                "Adrafinil (or Modafinil)",
                "Racetam of choice",
                "Alpha-GPC"
            ]
         },
         {
            code: "herb",
            name: "Herbal morning",
            contents: [
                "L-Theanine",
                "Ginkgo Biloba",
                "Panax Ginseng",
                "Rhodiola Rosea",
                "Bacopa monnieri",
                "Ashwagandha"
            ]
         },
         {
            code: "dinn",
            name: "Post-dinner push",
            contents: [
                "Ashwagandha",
                "L-Theanine"
            ]
         },
         {
            code: "calm",
            name: "Twilight zen",
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
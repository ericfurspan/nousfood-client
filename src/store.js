
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import userDataReducer from './reducers/user-data';
import globalDataReducer from './reducers/global-data';

const store = createStore(
    combineReducers({
        form: formReducer,
        user_data: userDataReducer,
        global_data: globalDataReducer
    }),
    applyMiddleware(thunk)
);

export default store;

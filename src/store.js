
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import userDataReducer from './reducers/user-data';

const store = createStore(
    combineReducers({
        form: formReducer,
        user_data: userDataReducer
    }),
    applyMiddleware(thunk)
);

export default store;

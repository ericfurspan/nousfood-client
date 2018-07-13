import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import userDataReducer from './reducers/user';
import globalDataReducer from './reducers/global';
import appStateReducer from './reducers/app-state';
import authReducer from './reducers/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        app_state: appStateReducer,
        user: userDataReducer,
        global: globalDataReducer
    }),
    applyMiddleware(thunk)
);

export default store;

import { createStore } from 'redux';
import userDataReducer from './reducers/user-data';

export default createStore(userDataReducer);
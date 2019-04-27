import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        applyMiddleware(thunk));

export default store;
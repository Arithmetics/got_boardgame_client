import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import gameReducer from './gameReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    user: userReducer,
    game: gameReducer
});
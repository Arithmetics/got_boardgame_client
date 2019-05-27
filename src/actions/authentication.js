import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  };
  

export const registerUser = (user) => dispatch => {
    axios.post('http://localhost:8000/api/user/new', user, config)
            .then(

            )
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:8000/api/user/login', user, config)
            .then(res => {
                const token  = res.data && res.data.user && res.data.user.token;
                if (typeof token !== 'undefined') {
                  localStorage.setItem('jwtToken', token);
                  setAuthToken(token);
                  const decoded = jwt_decode(token);
                  const updater = {}
                  updater.decoded = decoded
                  updater.user = res.data && res.data.user
                  dispatch(setCurrentUser(updater));
                } else {
                  dispatch({
                    type: GET_ERRORS,
                    payload: res.data && res.data.message
                });
                }
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}

export const setCurrentUser = (updater) => {
    return {
        type: SET_CURRENT_USER,
        payload: updater
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}
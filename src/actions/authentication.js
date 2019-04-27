import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  };
  

export const registerUser = (user, history) => dispatch => {
    axios.post('localhost:8000/api/users/new', user)
            .then()
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
    axios.post('http://192.168.0.48:8000/api/user/login', user, config)
            .then(res => {
                console.log(res)
                const token  = res.data && res.data.user && res.data.user.token;
                if (typeof token !== 'undefined') {
                  localStorage.setItem('jwtToken', token);
                  setAuthToken(token);
                  const decoded = jwt_decode(token);
                  dispatch(setCurrentUser(decoded));
                } else {
                  console.log("could dispatch handled error here")
                  dispatch({
                    type: GET_ERRORS,
                    payload: res.data && res.data.message
                });
                }
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}
import axios from 'axios';
import { GET_ERRORS, GET_USER } from './types';

const config = {
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
  }
};



export const getUser = () => dispatch => {
  axios.get('http://localhost:8000/api/user/me', config)
          .then(res => {
              const data  = res.data
              dispatch({
                type: GET_USER,
                payload: data
              })
          })
          .catch(err => {
              dispatch({
                  type: GET_ERRORS,
                  payload: err.response
              });
          });
}
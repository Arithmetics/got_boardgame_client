import axios from 'axios';
import { GET_ERRORS, GET_GAME } from './types';


const config = {
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
  }
};



export const getGame = () => dispatch => {
  axios.get('http://localhost:8000/api/game/me', config)
          .then(res => {
              const data  = res.data
              dispatch({
                type: GET_GAME,
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
import axios from 'axios';
import { GET_ERRORS, GET_GAME } from './types';


const config = {
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
  }
};

export const createGame = (game) => dispatch => {
  axios.post('http://localhost:8000/api/game/new', game, config)
          .then(

          )
          .catch(err => {
              dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
              });
          });
}

export const getGame = (id) => dispatch => {
  axios.get(`http://localhost:8000/api/game/${id}`, config)
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
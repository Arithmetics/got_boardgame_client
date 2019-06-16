import axios from 'axios';
import { GET_ERRORS, GET_GAME, GET_GAMES } from './types';


const config = {
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
  }
};

export const createGame = (game, history) => dispatch => {
  axios.post('http://localhost:8000/api/game/new', game, config)
          .then(
            // need a state update / dispatch here
            history.push('/')
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
      console.log(res)
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

export const getGames = () => dispatch => {
  axios.get(`http://localhost:8000/api/game/all`, config)
  .then(res => {
    console.log(res)
      const data  = res.data
      dispatch({
        type: GET_GAMES,
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
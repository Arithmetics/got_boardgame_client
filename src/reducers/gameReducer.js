import { GET_GAME, GET_GAMES } from '../actions/types';

const initialState = {
    selectedGame: {},
    allGames: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_GAME:
            return {
                ...state,
                selectedGame: action.payload.data
            }
        default: 
            return state;
    }
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_GAMES:
            return {
                ...state,
                allGames: action.payload.data
            }
        default: 
            return state;
    }
}
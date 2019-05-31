import { GET_GAME } from '../actions/types';

const initialState = {
    selectedGame: {}
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
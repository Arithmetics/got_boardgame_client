import { GET_GAME } from '../actions/types';

const initialState = {
    game: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_GAME:
            return {
                ...state,
                selectedGAme: action.payload.data
            }
        default: 
            return state;
    }
}
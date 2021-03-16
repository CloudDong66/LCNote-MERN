import { GET_BACKTRACKINGS, ADD_BACKTRACKING, DELETE_BACKTRACKING, BACKTRACKINGS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    backtrackings: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BACKTRACKINGS:
            return {
                ...state,
                backtrackings: action.payload,
                loading: false
            };
        case DELETE_BACKTRACKING:
            return {
                ...state,
                backtrackings: state.backtrackings.filter(backtracking => backtracking._id !== action.payload)
            };
        case ADD_BACKTRACKING:
            return {
                ...state,
                backtrackings: [action.payload, ...state.backtrackings]
            };
        case BACKTRACKINGS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
import { GET_RECURSIONS, ADD_RECURSION, DELETE_RECURSION, RECURSIONS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    recursions: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RECURSIONS:
            return {
                ...state,
                recursions: action.payload,
                loading: false
            };
        case DELETE_RECURSION:
            return {
                ...state,
                recursions: state.recursions.filter(recursion => recursion._id !== action.payload)
            };
        case ADD_RECURSION:
            return {
                ...state,
                recursions: [action.payload, ...state.recursions]
            };
        case RECURSIONS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
import { GET_HASHTABLES, ADD_HASHTABLE, DELETE_HASHTABLE, HASHTABLES_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    hashtables: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_HASHTABLES:
            return {
                ...state,
                hashtables: action.payload,
                loading: false
            };
        case DELETE_HASHTABLE:
            return {
                ...state,
                hashtables: state.hashtables.filter(hashtable => hashtable._id !== action.payload)
            };
        case ADD_HASHTABLE:
            return {
                ...state,
                hashtables: [action.payload, ...state.hashtables]
            };
        case HASHTABLES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
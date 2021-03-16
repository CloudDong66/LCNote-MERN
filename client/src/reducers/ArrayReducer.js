import { GET_ARRAYS, ADD_ARRAY, DELETE_ARRAY, ARRAYS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    arrays: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ARRAYS:
            return {
                ...state,
                arrays: action.payload,
                loading: false
            };
        case DELETE_ARRAY:
            return {
                ...state,
                arrays: state.arrays.filter(array => array._id !== action.payload)
            };
        case ADD_ARRAY:
            return {
                ...state,
                arrays: [action.payload, ...state.arrays]
            };
        case ARRAYS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
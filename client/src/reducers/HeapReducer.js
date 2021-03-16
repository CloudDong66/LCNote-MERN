import { GET_HEAPS, ADD_HEAP, DELETE_HEAP, HEAPS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    heaps: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_HEAPS:
            return {
                ...state,
                heaps: action.payload,
                loading: false
            };
        case DELETE_HEAP:
            return {
                ...state,
                heaps: state.heaps.filter(heap => heap._id !== action.payload)
            };
        case ADD_HEAP:
            return {
                ...state,
                heaps: [action.payload, ...state.heaps]
            };
        case HEAPS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
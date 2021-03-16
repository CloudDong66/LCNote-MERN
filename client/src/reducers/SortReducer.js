import { GET_SORTS, ADD_SORT, DELETE_SORT, SORTS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    sorts: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SORTS:
            return {
                ...state,
                sorts: action.payload,
                loading: false
            };
        case DELETE_SORT:
            return {
                ...state,
                sorts: state.sorts.filter(sort => sort._id !== action.payload)
            };
        case ADD_SORT:
            return {
                ...state,
                sorts: [action.payload, ...state.sorts]
            };
        case SORTS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
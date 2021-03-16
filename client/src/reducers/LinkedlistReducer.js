import { GET_LINKEDLISTS, ADD_LINKEDLIST, DELETE_LINKEDLIST, LINKEDLISTS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    linkedlists: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_LINKEDLISTS:
            return {
                ...state,
                linkedlists: action.payload,
                loading: false
            };
        case DELETE_LINKEDLIST:
            return {
                ...state,
                linkedlists: state.linkedlists.filter(linkedlist => linkedlist._id !== action.payload)
            };
        case ADD_LINKEDLIST:
            return {
                ...state,
                linkedlists: [action.payload, ...state.linkedlists]
            };
        case LINKEDLISTS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
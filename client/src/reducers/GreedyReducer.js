import { GET_GREEDYS, ADD_GREEDY, DELETE_GREEDY, GREEDYS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    greedys: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_GREEDYS:
            return {
                ...state,
                greedys: action.payload,
                loading: false
            };
        case DELETE_GREEDY:
            return {
                ...state,
                greedys: state.greedys.filter(greedy => greedy._id !== action.payload)
            };
        case ADD_GREEDY:
            return {
                ...state,
                greedys: [action.payload, ...state.greedys]
            };
        case GREEDYS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
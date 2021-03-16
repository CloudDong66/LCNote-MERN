import { GET_TREES, ADD_TREE, DELETE_TREE, TREES_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    trees: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TREES:
            return {
                ...state,
                trees: action.payload,
                loading: false
            };
        case DELETE_TREE:
            return {
                ...state,
                trees: state.trees.filter(tree => tree._id !== action.payload)
            };
        case ADD_TREE:
            return {
                ...state,
                trees: [action.payload, ...state.trees]
            };
        case TREES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
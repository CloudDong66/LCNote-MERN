import { GET_GRAPHS, ADD_GRAPH, DELETE_GRAPH, GRAPHS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    graphs: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_GRAPHS:
            return {
                ...state,
                graphs: action.payload,
                loading: false
            };
        case DELETE_GRAPH:
            return {
                ...state,
                graphs: state.graphs.filter(graph => graph._id !== action.payload)
            };
        case ADD_GRAPH:
            return {
                ...state,
                graphs: [action.payload, ...state.graphs]
            };
        case GRAPHS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
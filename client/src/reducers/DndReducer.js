import { GET_DNDS, ADD_DND, DELETE_DND, DNDS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    dnds: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DNDS:
            return {
                ...state,
                dnds: action.payload,
                loading: false
            };
        case DELETE_DND:
            return {
                ...state,
                dnds: state.dnds.filter(dnd => dnd._id !== action.payload)
            };
        case ADD_DND:
            return {
                ...state,
                dnds: [action.payload, ...state.dnds]
            };
        case DNDS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
import { GET_SNQS, ADD_SNQ, DELETE_SNQ, SNQS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    snqs: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SNQS:
            return {
                ...state,
                snqs: action.payload,
                loading: false
            };
        case DELETE_SNQ:
            return {
                ...state,
                snqs: state.snqs.filter(snq => snq._id !== action.payload)
            };
        case ADD_SNQ:
            return {
                ...state,
                snqs: [action.payload, ...state.snqs]
            };
        case SNQS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
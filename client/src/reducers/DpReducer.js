import { GET_DPS, ADD_DP, DELETE_DP, DPS_LOADING } from '../actions/types';
import store from "../store";

const initialState = {
    dps: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DPS:
            return {
                ...state,
                dps: action.payload,
                loading: false
            };
        case DELETE_DP:
            return {
                ...state,
                dps: state.dps.filter(dp => dp._id !== action.payload)
            };
        case ADD_DP:
            return {
                ...state,
                dps: [action.payload, ...state.dps]
            };
        case DPS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
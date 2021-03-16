import axios from 'axios';
import { GET_DPS, ADD_DP, DELETE_DP, DPS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/dps')
      .then(res => 
        dispatch({
            type: GET_DPS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/dps/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_DP,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = dp => (dispatch, getState) => {
    axios
      .post('/api/dps', dp, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_DP,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: DPS_LOADING
    }
}
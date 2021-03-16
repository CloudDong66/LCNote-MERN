import axios from 'axios';
import { GET_SNQS, ADD_SNQ, DELETE_SNQ, SNQS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/snqs')
      .then(res => 
        dispatch({
            type: GET_SNQS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/snqs/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_SNQ,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = snq => (dispatch, getState) => {
    axios
      .post('/api/snqs', snq, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_SNQ,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: SNQS_LOADING
    }
}
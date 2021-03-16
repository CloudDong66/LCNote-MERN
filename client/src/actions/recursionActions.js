import axios from 'axios';
import { GET_RECURSIONS, ADD_RECURSION, DELETE_RECURSION, RECURSIONS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/recursions')
      .then(res => 
        dispatch({
            type: GET_RECURSIONS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/recursions/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_RECURSION,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = recursion => (dispatch, getState) => {
    axios
      .post('/api/recursions', recursion, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_RECURSION,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: RECURSIONS_LOADING
    }
}
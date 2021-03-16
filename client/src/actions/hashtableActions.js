import axios from 'axios';
import { GET_HASHTABLES, ADD_HASHTABLE, DELETE_HASHTABLE, HASHTABLES_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/hashtables')
      .then(res => 
        dispatch({
            type: GET_HASHTABLES,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/hashtables/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_HASHTABLE,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = hashtable => (dispatch, getState) => {
    axios
      .post('/api/hashtables', hashtable, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_HASHTABLE,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: HASHTABLES_LOADING
    }
}
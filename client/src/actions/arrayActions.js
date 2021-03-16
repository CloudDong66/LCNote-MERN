import axios from 'axios';
import { GET_ARRAYS, ADD_ARRAY, DELETE_ARRAY, ARRAYS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/arrays')
      .then(res => 
        dispatch({
            type: GET_ARRAYS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/arrays/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_ARRAY,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = array => (dispatch, getState) => {
    axios
      .post('/api/arrays', array, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_ARRAY,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: ARRAYS_LOADING
    }
}
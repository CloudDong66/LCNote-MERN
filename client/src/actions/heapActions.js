import axios from 'axios';
import { GET_HEAPS, ADD_HEAP, DELETE_HEAP, HEAPS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/heaps')
      .then(res => 
        dispatch({
            type: GET_HEAPS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/heaps/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_HEAP,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = heap => (dispatch, getState) => {
    axios
      .post('/api/heaps', heap, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_HEAP,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: HEAPS_LOADING
    }
}
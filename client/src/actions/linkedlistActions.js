import axios from 'axios';
import { GET_LINKEDLISTS, ADD_LINKEDLIST, DELETE_LINKEDLIST, LINKEDLISTS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/linkedlists')
      .then(res => 
        dispatch({
            type: GET_LINKEDLISTS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/linkedlists/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_LINKEDLIST,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = linkedlist => (dispatch, getState) => {
    axios
      .post('/api/linkedlists', linkedlist, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_LINKEDLIST,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: LINKEDLISTS_LOADING
    }
}
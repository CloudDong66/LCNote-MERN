import axios from 'axios';
import { GET_TREES, ADD_TREE, DELETE_TREE, TREES_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/trees')
      .then(res => 
        dispatch({
            type: GET_TREES,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/trees/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_TREE,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = tree => (dispatch, getState) => {
    axios
      .post('/api/trees', tree, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_TREE,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: TREES_LOADING
    }
}
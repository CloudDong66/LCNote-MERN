import axios from 'axios';
import { GET_SORTS, ADD_SORT, DELETE_SORT, SORTS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/sorts')
      .then(res => 
        dispatch({
            type: GET_SORTS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/sorts/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_SORT,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = sort => (dispatch, getState) => {
    axios
      .post('/api/sorts', sort, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_SORT,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: SORTS_LOADING
    }
}
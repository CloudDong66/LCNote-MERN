import axios from 'axios';
import { GET_BACKTRACKINGS, ADD_BACKTRACKING, DELETE_BACKTRACKING, BACKTRACKINGS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/backtrackings')
      .then(res => 
        dispatch({
            type: GET_BACKTRACKINGS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/backtrackings/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_BACKTRACKING,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = backtracking => (dispatch, getState) => {
    axios
      .post('/api/backtrackings', backtracking, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_BACKTRACKING,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: BACKTRACKINGS_LOADING
    }
}
import axios from 'axios';
import { GET_DNDS, ADD_DND, DELETE_DND, DNDS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/dnds')
      .then(res => 
        dispatch({
            type: GET_DNDS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/dnds/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_DND,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = dnd => (dispatch, getState) => {
    axios
      .post('/api/dnds', dnd, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_DND,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: DNDS_LOADING
    }
}
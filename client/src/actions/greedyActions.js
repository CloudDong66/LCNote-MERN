import axios from 'axios';
import { GET_GREEDYS, ADD_GREEDY, DELETE_GREEDY, GREEDYS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/greedys')
      .then(res => 
        dispatch({
            type: GET_GREEDYS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/greedys/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_GREEDY,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = greedy => (dispatch, getState) => {
    axios
      .post('/api/greedys', greedy, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_GREEDY,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: GREEDYS_LOADING
    }
}
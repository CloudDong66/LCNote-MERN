import axios from 'axios';
import { GET_GRAPHS, ADD_GRAPH, DELETE_GRAPH, GRAPHS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('/api/graphs')
      .then(res => 
        dispatch({
            type: GET_GRAPHS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/graphs/${id}`, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: DELETE_GRAPH,
            payload: id
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = graph => (dispatch, getState) => {
    axios
      .post('/api/graphs', graph, tokenConfig(getState))
      .then(res => 
        dispatch({
            type: ADD_GRAPH,
            payload: res.data
        })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setItemsLoading = () => {
    return {
        type: GRAPHS_LOADING
    }
}
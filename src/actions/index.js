import axios from 'axios';
import { useState } from 'react';

export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';


export const fetchSmurf = () => (dispatch) => {
    dispatch({ type: START_FETCH });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL})
        })
}

export const addSmurf = (newSmurf) => {
    return {
        type: ADD_SMURF,
        payload: newSmurf
    }
}

export const setError = (err) => {
    return {
        type: SET_ERROR,
        payload: err
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
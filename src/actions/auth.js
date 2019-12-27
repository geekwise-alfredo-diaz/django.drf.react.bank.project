import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS } from './types'

export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    if(token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('https://g-f-django-bank-app.herokuapp.com/auth/user', config)
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data,
        })
        // Temporary for continous sign in 
        dispatch({type: AUTH_ERROR});
    })
        
    .catch(err => {
        dispatch({type: AUTH_ERROR});
    })
}

export const login = (username, password) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({username, password});

    axios.post('https://g-f-django-bank-app.herokuapp.com/auth/login', body, config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })})
    .catch(err => {
        dispatch({type: LOGIN_FAIL});
    })
}
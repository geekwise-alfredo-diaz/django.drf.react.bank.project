import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types'

export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});

    const token = getState().auth.token;

    const config = {
        Headers: {
            'Content-Type': 'application/json',
        }
    }

    if(token) {
        config.Headers['Authorization'] = `Token ${token}`
    }

    axios.get('https://g-f-django-bank-app.herokuapp.com/auth/user', config)
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data,
        })})
    .catch(err => {
        dispatch({type: AUTH_ERROR});
    })
}
import axios from 'axios';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from './types';
// import auth from '../reducers/auth';

// Check token & load user
export const loadUser = () => (dispatch) => {
    // User loading
    dispatch({ type: USER_LOADING });
    axios
      .get('https://g-f-django-bank-app.herokuapp.com/auth/user', tokenConfig())
      .then(res => {
          console.log(res.data.groups[0])
          dispatch({
            type: USER_LOADED,
            payload: res.data
          });
          dispatch({
            type: 'GET_AUTH_LEVEL',
            payload: getAuthLevel(res.data.groups[0]),
        })
      })
      .catch(err => {
          console.log(err.data)
          console.log("ERROR: " + err)
        //   alert('Load Error');
          dispatch({
              type: AUTH_ERROR
          });
      });
};

// Login user
export const login = (username, password) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body 
    const body = JSON.stringify({ username, password });

    axios
      .post('https://g-f-django-bank-app.herokuapp.com/auth/login', body, config)
      .then(res => {
          console.log(res.data);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          });
          dispatch({
            type: 'GET_AUTH_LEVEL',
            payload: getAuthLevel(res.data.user.groups[0]),
          })
          
      })
      .catch(err => {
          dispatch({
              type: LOGIN_FAIL
          });
          console.log(err);
          alert("Incorrect Credentials");
      });
};

// Register new user
export const register = ({ username, email, password, group }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body 
    const body = JSON.stringify({username, email, password, groups: [parseFloat(group)]});

    axios
      .post('https://g-f-django-bank-app.herokuapp.com/auth/register', body, config)
      .then(res => {
          console.log(res.data);
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
          });
          dispatch({
            type: 'GET_AUTH_LEVEL',
            payload: getAuthLevel(res.data.user.groups[0]),
          })
          alert("You have successfully registered an account. Please login.");

      })
      .catch(err => {
          dispatch({
              type: REGISTER_FAIL
          });
          console.log(err);
          alert("Username cannot include spaces (OR) Invalid information was provided");

      });
};

// Logout user
export const logout = () => (dispatch, getState) => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
      .post('https://g-f-django-bank-app.herokuapp.com/auth/logout', null, config)
      .then(res => {
          ;
          dispatch({
            type: LOGOUT_SUCCESS,
          });
      })
      .catch(err => {
        console.log(err)
        //   dispatch(returnErrors(err.response.data, err.response.status));
      });
};

// Changes Header Text
export const headerChange = text => dispatch => {
    dispatch({
        type: 'HEADER_CHANGE',
        payload: text
    }) 
}

export const getAuthLevel = groupName => {
    switch (groupName.name) {
        case 'branch.admin':
            return 5;
        case 'branch.staff':
            return 4;
        case 'bank.admin':
            return 3;
        case 'bank.staff':
            return 2;
        case 'member':
            return 1;
        default:
            return 0;
    }
}

export const tokenConfig = () => {
    const token = localStorage.getItem('token');
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    // alert('TOKEN' + token)
    console.log(config);

    return config;
}
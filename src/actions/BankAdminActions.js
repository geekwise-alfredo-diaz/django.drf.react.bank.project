import axios from 'axios';

// Grabs Token For User Auth
export const tokenConfig = () => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    return config;
}

// GET STAFF MEMBERS
export const getStaffMembers = () => dispatch => {
    axios.get('https://g-f-django-bank-app.herokuapp.com/auth/users', tokenConfig())
    .then(res => {
        dispatch({
        type: 'GET_STAFF_MEMBERS',
        payload: res.data,
    })}).catch(err => console.log(err));
}
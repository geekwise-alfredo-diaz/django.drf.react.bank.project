import axios from 'axios';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER } from './types';

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

// GET CUSTOMERS
export const getCustomers = dispatch => {
    axios.get('https://g-f-django-bank-app.herokuapp.com/customers/', tokenConfig())
    .then(res => {
        dispatch({
        type: GET_CUSTOMERS,
        payload: res.data,
    })}).catch(err => console.log(err));
}

// DELETE CUSTOMER
export const deleteCustomer = (customerId, dispatch)=> {
    axios.delete(`https://g-f-django-bank-app.herokuapp.com/customers/${customerId}/`, tokenConfig())
    .then(res => {
        dispatch({
        type: DELETE_CUSTOMER,
        payload: customerId,
    })}).catch(err => console.log(err));
}

// ADD CUSTOMER
export const addCustomer = (customerName, dispatch) => {
    const body = JSON.stringify({name: customerName});
    axios.post(`https://g-f-django-bank-app.herokuapp.com/customers/`, body, tokenConfig())
    .then(res => {
        getCustomers(dispatch)
        dispatch({
        type: ADD_CUSTOMER,
        payload: res.data,
    })}).catch(err => console.log(err));
}

// UPDATE CUSTOMER
export const updateCustomer = (customerId, customerName, dispatch) => {
    let body = {
        id: customerId,
        name: customerName
    }

    axios.put(`https://g-f-django-bank-app.herokuapp.com/customers/${customerId}/`, body, tokenConfig())
    .then(res => {
        getCustomers(dispatch);
    }).catch(err => console.log(err));
}
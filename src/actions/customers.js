import axios from 'axios';
import { GET_CUSTOMERS } from './types';

// GET CUSTOMERS
export const getCustomers = () => dispatch => {
    axios.get('https://g-f-django-bank-app.herokuapp.com/customers/')
    .then(res => {
        console.log('Customers: ' + res.data)
        dispatch({
        type: GET_CUSTOMERS,
        payload: res.data,
    })}).catch(err => console.log(err));
}
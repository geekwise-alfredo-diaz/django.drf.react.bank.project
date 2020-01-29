import axios from 'axios';
import { tokenConfig } from './auth'

export const deleteAccount = (accountId) => dispatch => {
    axios.delete(`https://g-f-django-bank-app.herokuapp.com/accounts/${accountId}/`)
    .then(res => {})
}

export const addAccount = (submitText) => dispatch => {
    axios.post('https://g-f-django-bank-app.herokuapp.com/accounts/',
    {
        name: submitText
    }).then(res => {})
    .catch(err => console.log(err));
}

export const updateAccount = (accountId, accountName) => dispatch => {
    let body = {
      id: accountId,
      name: accountName
  }

  axios.put(`https://g-f-django-bank-app.herokuapp.com/accounts/${accountId}/`, body)
  .then(res => {})
  .catch(err => console.log(err));
}

export const refreshAccounts = () => dispatch => {
    axios.get('https://g-f-django-bank-app.herokuapp.com/accounts/', tokenConfig())
    .then(res => 
        dispatch({
            type: 'RENDER_ACCOUNTS',
            payload: res.data
        }))
    .catch(err => console.log(err))
}
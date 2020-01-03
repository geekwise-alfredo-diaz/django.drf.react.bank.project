import axios from 'axios'

export const getBranches = (dispatch) => {
    axios.get('https://g-f-django-bank-app.herokuapp.com/branches/')
    .then(res => dispatch({type: 'RENDER_BRANCHES', payload: res.data}))
    .catch(err => console.log('Error: ' + err));
}

export const deleteBranch = (branchId, dispatch)=> {
    axios.delete(`https://g-f-django-bank-app.herokuapp.com/branches/${branchId}/`)
    .then(res => dispatch({type: 'DELETE_BRANCH', payload: branchId}))
  }

export const updateBranch = (branchId, branchName, dispatch) => {
    let body = {
        id: branchId,
        name: branchName
    }

    axios.put(`https://g-f-django-bank-app.herokuapp.com/branches/${branchId}/`, body)
    .then(res => { getBranches(dispatch)}).catch(err => console.log(err));
}

export const addBranch = (submitText, dispatch) => {
    axios.post('https://g-f-django-bank-app.herokuapp.com/branches/',
    {
        name: submitText
    }).then(res => getBranches(dispatch))
    .catch(err => console.log(err));
}
import { combineReducers } from 'redux';

import customers from './customers';
import auth from './auth';
import branches from './branches'
import staff from './staffReducer'
import accounts from './accounts'

export default combineReducers({
    customers,
    auth,
    branches,
    staff,
    accounts,
});
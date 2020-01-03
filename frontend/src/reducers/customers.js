import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER, LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
    customers: [],
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
            };
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers
                .filter(customer => customer.id !== action.payload)
            }
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [action.payload, ...state.customers]
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                customers: [],
            }
        default:
            return state;
    }

}
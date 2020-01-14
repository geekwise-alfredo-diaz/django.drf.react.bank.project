import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER, LOGOUT_SUCCESS } from '../actions/types';

const memberReducer = (state, action) => {
    switch(action.type){
        case GET_CUSTOMERS:
            return [...action.payload]
        case ADD_CUSTOMER:
            return [action.payload, ...state]
        case DELETE_CUSTOMER:
            return [...state.filter(
                member => member.id !== action.payload)]
        case LOGOUT_SUCCESS:
            return []
        default:
            return state;

    }
}

export default memberReducer;
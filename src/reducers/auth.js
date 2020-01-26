import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_FAIL,
    LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    group: null,
    isAuthenticated: null,
    isLoading: false,
    user: null,
    header: '',
    authLevel: null,
}

export default function(state=initialState, action){
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
                group: action.payload.groups[0].name,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            // console.log('Logged-in user: ' + action.payload.groups[0].name)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                group: action.payload.user.groups[0].name
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                group: null,
                authLevel: null,
            }
        case 'HEADER_CHANGE':
                console.log('Changed: ' + action.payload)
            return {
                ...state,
                header: action.payload,
            }
        case 'GET_AUTH_LEVEL':
            // alert('Auth: ' + action.payload)
            return {
                ...state,
                authLevel: action.payload
            }
        default:
            return state;
    }
}
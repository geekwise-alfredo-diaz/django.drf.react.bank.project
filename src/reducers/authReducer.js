import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_FAIL,
    LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'

const authReducer = (state, action) => {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOADED:
            console.log('Loaded user: ' + Object.keys(action.payload))
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
                group: action.payload.groups[0].name
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            console.log('Logged-in user: ' + action.payload.user.groups[0].name)
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                group: action.payload.user.groups[0].name
            }
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            console.log('Logged-out user')
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                group: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }

        default:
            return state;
    }
}

export default authReducer;
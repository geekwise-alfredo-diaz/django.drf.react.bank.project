const initialState = {
    accounts: [],
}

export default function(state=initialState, action) {
    switch(action.type){
        case 'RENDER_ACCOUNTS':
            return [...action.payload]
        case 'ADD_ACCOUNT':
            return [action.payload, ...state]
        case 'DELETE_ACCOUNT':
            return [...state.filter(
                account => account.id !== action.payload)]
        default:
            return state;

    }
}
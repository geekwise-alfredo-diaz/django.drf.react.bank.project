const initialState = {
    staff: [],
}

const staffReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_STAFF_MEMBERS':
            return [...action.payload]
        default:
            return state;
    }
}

export default staffReducer;
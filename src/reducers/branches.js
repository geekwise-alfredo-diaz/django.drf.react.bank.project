const branchReducer = (state, action) => {
    switch(action.type){
        case 'RENDER_BRANCHES':
            return [...action.payload]
        case 'ADD_BRANCH':
            return [...state, action.payload]
        case 'DELETE_BRANCH':
            return [...state.filter(
                branch => branch.id !== action.payload)]
        default:
            return state;

    }
}

export default branchReducer;
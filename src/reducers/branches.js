// const branchReducer = (state, action) => {
//     switch(action.type){
//         case 'RENDER_BRANCHES':
//             return [...action.payload]
//         case 'ADD_BRANCH':
//             return [action.payload, ...state]
//         case 'DELETE_BRANCH':
//             return [...state.filter(
//                 branch => branch.id !== action.payload)]
//         default:
//             return state;

//     }
// }

// export default branchReducer;


const initialState = {
    branches: [],
}

export default function(state=initialState, action) {
    switch(action.type){
        case 'RENDER_BRANCHES':
            return [...action.payload]
        case 'ADD_BRANCH':
            return [action.payload, ...state]
        case 'DELETE_BRANCH':
            return [...state.filter(
                branch => branch.id !== action.payload)]
        default:
            return state;

    }
}
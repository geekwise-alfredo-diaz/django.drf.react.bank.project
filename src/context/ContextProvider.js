import React, {createContext, useReducer}from 'react'
import branchReducer from '../reducers/branches'

// Context that will be provided via CC.Provider
export const BranchContext = createContext();

// The Provider itself that will be used in App.js
const BranchContextProvider = props => {

    const [branches, dispatch] = useReducer(branchReducer, []);

    return (
        <BranchContext.Provider value={{branches, dispatch}}>
            {props.children}
        </BranchContext.Provider>
    )
}

export default BranchContextProvider;
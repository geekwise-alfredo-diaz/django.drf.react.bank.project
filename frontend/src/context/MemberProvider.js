import React, {createContext, useReducer}from 'react'
import memberReducer from '../reducers/memberReducer'

// Context that will be provided via CC.Provider
export const MemberContext = createContext();

// The Provider itself that will be used in App.js
const MemberContextProvider = props => {

    const [members, dispatch] = useReducer(memberReducer, []);

    return (
        <MemberContext.Provider value={{members, dispatch}}>
            {props.children}
        </MemberContext.Provider>
    )
}

export default MemberContextProvider;
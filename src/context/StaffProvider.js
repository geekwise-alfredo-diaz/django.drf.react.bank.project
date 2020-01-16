import React, {createContext, useReducer} from 'react'
import staffReducer from '../reducers/staffReducer';

// Context that will be provided via CC.Provider
export const StaffContext = createContext();

// The Provider itself that will be used in App.js
const StaffContextProvider = props => {

    const [staff, dispatch] = useReducer(staffReducer, []);

    return (
        <StaffContext.Provider value={{staff, dispatch}}>
            {props.children}
        </StaffContext.Provider>
    )
}

export default StaffContextProvider;
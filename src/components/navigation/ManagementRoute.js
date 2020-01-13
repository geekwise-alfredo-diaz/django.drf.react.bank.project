// Native Imports
import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom';

// Context
import {AuthContext} from '../../context/AuthProvider'

// Actions
import { verifyManagement } from '../../actions/authActions'

const ManagementRoute = ({component: Component, ...rest}) => {
    const { auth } = useContext(AuthContext);

    return(
        <Route 
        {...rest}
        render={props => {
            if(auth.isLoading) {
                return <h2>Loading...</h2>
            } else if(!verifyManagement(auth)) {
                return <Redirect to="/login" />
            } else {
                return <Component {...props}/>
            }
        }}
        />
    )
}

export default ManagementRoute;
// Native Imports
import React from 'react'
import { Route, Redirect } from 'react-router-dom';

// Context
// import {AuthContext} from '../../context/AuthProvider'

// Actions
// import { getAuthLevel } from '../../actions/authActions'

// Redux
import { connect } from 'react-redux'

const ManagementRoute = ({component: Component, auth, ...rest}) => {

    return(
        <Route 
        {...rest}
        render={props => {
            if(auth.isLoading) {
                return <h2>Loading...</h2>
            } else if(auth.authLevel !== 3) {
                return <Redirect to="/login" />
            } else {
                return <Component {...props}/>
            }
        }}
        />
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(ManagementRoute);
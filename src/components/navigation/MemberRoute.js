// Native Imports
import React from 'react'
import { Route, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

const MemberRoute = ({component: Component, auth, ...rest}) => {

    return(
        <Route 
        {...rest}
        render={props => {
            console.log('Auth: ' + auth.authLevel)
            if(auth.isLoading) {
                return <h2>Loading...</h2>
            } else if(auth.authLevel !== 1) {
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

export default connect(mapStateToProps)(MemberRoute);
// Native Imports
import React from 'react'
import { Route, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux'

const TellerRoute = ({component: Component, auth, ...rest}) => {
    // const { auth } = useContext(AuthContext);

    return(
        <Route 
        {...rest}
        render={props => {
            if(auth.isLoading) {
                return <h2>Loading...</h2>
            } else if(auth.authLevel < 2) {
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

export default connect(mapStateToProps)(TellerRoute);
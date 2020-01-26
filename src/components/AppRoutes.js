// Native Imports
import React, { Component } from "react";
import { Route } from 'react-router-dom';

// Navigation
import Home from './navigation/Home';
import SideBar from './navigation/SideBar';

// Components
import Branches from './Branches';
import Accounts from './Accounts';
import Products from './Products';
import Members from './Members';
import Manage from './Manage';

// Authentication
import Login from './accounts/Login';
import Register from './accounts/Register'
import PrivateRoute from './navigation/PrivateRoute';
import ManagementRoute from './navigation/ManagementRoute';
import TellerRoute from './navigation/TellerRoute';
// import MemberRoute from './navigation/MemberRoute';

// Context Provider
// import BranchContextProvider from '../context/BranchProvider'
import MemberContextProvider from '../context/MemberProvider'
import StaffContextProvider from '../context/StaffProvider'

// Context
// import { AuthContext } from '../context/AuthProvider'

// Redux
import { connect } from 'react-redux'
// import {loadUser} from '../actions/authActions'
// import App from "../App";

export class AppRoutes extends Component {

    // componentDidMount(){
    //     loadUser()
    // }


    render() {
        return (
            <div className="d-flex flex-row">
                <Route path="/" component={SideBar}/>

                <Route exact path="/" component={Home}/>

                {/*Branches*/}
                <TellerRoute path="/branches" component={Branches}/>

                <TellerRoute path="/accounts" component={Accounts}/>
                {/* Private Route */}

                <MemberContextProvider>
                    <PrivateRoute path="/holders" component={Members}/>
                </MemberContextProvider>

                <StaffContextProvider>
                    <ManagementRoute path="/admin" component={Manage}/>
                </StaffContextProvider>
                
                <TellerRoute path="/products" component={Products}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
  
export default connect(mapStateToProps)(AppRoutes);
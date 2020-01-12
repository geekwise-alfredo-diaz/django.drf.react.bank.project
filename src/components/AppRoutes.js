import React, { Component } from "react";
import { Route } from 'react-router-dom';

// Navigation
import Home from './navigation/Home';
import SideBar from './navigation/SideBar';

// Components
import Branches from './Branches';
import Accounts from './Accounts';
import Products from './Products';
import Members from './Members'

// Authentication
import Login from './accounts/Login';
import Register from './accounts/Register'
import PrivateRoute from './navigation/PrivateRoute';

// Context
import BranchContextProvider from '../context/BranchProvider'
import MemberContextProvider from '../context/MemberProvider'

// test
import { AuthContext } from '../context/AuthProvider'
import {loadUser} from '../actions/authActions'

export class AppRoutes extends Component {
    static contextType = AuthContext

    componentDidMount(){
        const {dispatch} = this.context;
        loadUser(dispatch)
    }


    render() {
        return (
            <div className="d-flex flex-row">
                <Route path="/" component={SideBar}/>

                <Route exact path="/" component={Home}/>

                {/*Branches*/}
                <BranchContextProvider>
                <Route path="/branches" component={Branches}/>
                </BranchContextProvider>

                <Route path="/accounts" component={Accounts}/>
                {/* Private Route */}

                <MemberContextProvider>
                <PrivateRoute path="/holders" component={Members}/>
                </MemberContextProvider>

                <Route path="/products" component={Products}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </div>
        )
    }
}

export default AppRoutes

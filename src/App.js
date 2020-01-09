import React, { Component } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';

// Navigation
import Home from './components/navigation/Home';
import Header from './components/navigation/Header';
import SideBar from './components/navigation/SideBar';

// Components
import Branches from './components/Branches';
import Accounts from './components/Accounts';
import Customers from './components/Customers';
import Products from './components/Products';

// Authentication
import Login from './components/accounts/Login';
import Register from './components/accounts/Register'
import PrivateRoute from './components/navigation/PrivateRoute';

// Stage Management
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import BranchContextProvider from './context/ContextProvider'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>

          <Header />

          <div className="d-flex flex-row">
            <Route path="/" component={SideBar}/>


            <Route exact path="/" component={Home}/>

            <BranchContextProvider>
              <Route path="/branches" component={Branches}/>
            </BranchContextProvider>

            <Route path="/accounts" component={Accounts}/>
            {/* Private Route */}
            <PrivateRoute path="/holders" component={Customers}/>
            <Route path="/products" component={Products}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </div>

        </Router>
      </Provider>
    );
  }
}

export default App;
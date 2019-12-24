import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Branches from './components/Branches';
import Accounts from './components/Accounts';
import Customers from './components/Customers';
import Products from './components/Products';
import Home from './components/navigation/Home';
import Header from './components/navigation/Header';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register'

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  

  render() {
    return (
      <Provider store={store}>
        <Router>

          <Header />

          <Route exact path="/" component={Home}/>
          <Route path="/branches" component={Branches}/>
          <Route path="/accounts" component={Accounts}/>
          <Route path="/holders" component={Customers}/>
          <Route path="/products" component={Products}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>


        </Router>
      </Provider>
    );
  }
}

export default App;
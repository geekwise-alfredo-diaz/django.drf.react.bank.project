import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Branches from './components/Branches';
import Accounts from './components/Accounts';
import Customers from './components/Customers';
import Products from './components/Products';
import Header from './components/navigation/Header'

class App extends Component {
  

  render() {
    return (
      <Router>

        <Header />
        
        <Route path="/branches" component={Branches}/>
        <Route path="/accounts" component={Accounts}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/products" component={Products}/>


      </Router>
    );
  }

}

export default App;
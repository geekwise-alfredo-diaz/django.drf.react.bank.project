// Native Imports
import React, { Component } from "react";
import { HashRouter as Router } from 'react-router-dom';

// Navigation
import Header from './components/navigation/Header';
import AppRoutes from './components/AppRoutes'

// Context
import AuthContextProvider from './context/AuthProvider'

// React - Redux
import { Provider } from 'react-redux';

// Redux Store
import store from "./store";

// Actions 
import { loadUser } from './actions/auth'




class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());


  }

  render() {
    return (
      // Provides context for auth
      <Provider store={store}>
        <AuthContextProvider>
          <Router>

            <Header />

            <AppRoutes />

          </Router>
        </AuthContextProvider>
      </Provider>
    );
  }
}

export default App;
// Native Imports
import React, { Component } from "react";
import { HashRouter as Router } from 'react-router-dom';

// Navigation
import Header from './components/navigation/Header';
import AppRoutes from './components/AppRoutes'

// Context
import AuthContextProvider from './context/AuthProvider'


class App extends Component {

  render() {
    return (
      // Provides context for auth
      <AuthContextProvider>
        <Router>

          <Header />

          <AppRoutes />

        </Router>
      </AuthContextProvider>
    );
  }
}

export default App;
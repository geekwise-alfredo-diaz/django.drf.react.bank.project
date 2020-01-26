// Native Imports
import React from 'react'
import { Link } from 'react-router-dom';

// Componenets
import Nav from 'react-bootstrap/Nav';

// Context 
import { AuthContext } from '../../context/AuthProvider'

// Actions
// import { logout } from '../../actions/authActions';

// Logo
import tbd from '../../tbd_min.png'

// Redux
import { connect } from 'react-redux';

import { logout } from '../../actions/auth'



class Header extends React.Component {
    static contextType = AuthContext


    linkStyle = {
      margin: '10px 5px',
      color: '#322f8b',
    }

    navStyle = {
      padding: '12px',
      backgroundColor: 'white',
      color: '#322f8b',
      height: '55px',
      position: 'fixed',
      top: '0',
      width: '100%',
      zIndex: '1'
    }

    rightHStyle = {
      margin: '-7px 0 0 -20px',
      whiteSpace: 'nowrap',
  
    }

    sixStyle = {
      fontSize: '28px',
      marginTop: '-7px',
      color: 'rgb(38, 32, 20)',
    }

    imgStyle = {
      width: '40px',
      marginLeft: '-15px',
    }
    
    logoutUser = () => {
      this.props.logout()
    }

    render() {
      console.log('Context: ' + Object.keys(this.context))
      const { isAuthenticated, user } = this.props.auth;

      const authLinks = (
        <Nav.Item style={this.rightHStyle} className="col-4 col-md-3 col-lg-2">
          <span className="navbar-text mr-3">
              {user ? `${user.username}` : ""}
          </span>
          <button onClick={this.logoutUser} className="btn-primary btn btn-sm text-light">
            Sign Out
          </button>
        </Nav.Item>
      )

      const guestLinks = (
        <Nav.Item className="col-4 col-md-3 col-lg-2">
          <Link style={this.linkStyle} to="/login">Login</Link>{' | '}
          <Link style={this.linkStyle} to="/register">Register</Link>
        </Nav.Item>
      )

      return (
        <Nav style={this.navStyle} activeKey="/">
          <Nav.Item className="col-8 col-md-9 col-lg-10">
            <div style={this.sixStyle}>
              <img alt='logo' style={this.imgStyle} src={tbd}></img>
              {this.props.auth.header}
            </div>
          </Nav.Item>
          { isAuthenticated ? authLinks : guestLinks }
        </Nav>
      )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);
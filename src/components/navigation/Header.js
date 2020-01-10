import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth';


class Header extends React.Component {

    static propTypes = {
      auth: PropTypes.object.isRequired,
      logout: PropTypes.func.isRequired,
    }


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
      marginTop: '-7px',
    }

    sixStyle = {
      fontSize: '28px',
      marginTop: '-7px',
    }

    render() {
      const { isAuthenticated, user } = this.props.auth;

      const authLinks = (
        <Nav.Item style={this.rightHStyle} className="col-4 col-md-3 col-lg-2">
          <span className="navbar-text mr-3">
              {user ? `${user.username}` : ""}
          </span>
          <button onClick={this.props.logout} className="btn-primary btn btn-sm text-light">
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
            <div style={this.sixStyle}>6 Customers/Donations or Promotions</div>
          </Nav.Item>
          { isAuthenticated ? authLinks : guestLinks }
        </Nav>
      )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header)
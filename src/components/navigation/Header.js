import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default class Header extends React.Component {
    linkStyle = {
      margin: '10px 5px',
      color: 'white',
    }

    navStyle = {
      padding: '12px',
      backgroundColor: '#333',
      color: 'white',
    }

    render() {
      return (
        <Nav style={this.navStyle} activeKey="/">
          <Nav.Item className="col-8 col-md-10">
            <Link style={this.linkStyle} to="/">Home</Link>
            <Link style={this.linkStyle} to="/branches">Branches</Link>
            <Link style={this.linkStyle} to="/holders">Holders</Link>
            <Link style={this.linkStyle} to="/accounts">Accounts</Link>
            <Link style={this.linkStyle} to="/products">Products</Link>
          </Nav.Item>
          <Nav.Item className="col-4 col-md-2">
            <Link style={this.linkStyle} to="/login">Login</Link>{'|'}
            <Link style={this.linkStyle} to="/register">Register</Link>
          </Nav.Item>
        </Nav>
      )
    }
}

/*
react-router-bootstrap
react-bootstrap
*/
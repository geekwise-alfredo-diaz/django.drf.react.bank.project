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
    }

    render() {
      return (
        <Nav style={this.navStyle} activeKey="/">
          <Nav.Item>
            <Link style={this.linkStyle} to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link style={this.linkStyle} to="/branches">Branches</Link>
          </Nav.Item>
          <Nav.Item>
            <Link style={this.linkStyle} to="/customers">Customers</Link>
          </Nav.Item>
          <Nav.Item>
            <Link style={this.linkStyle} to="/accounts">Accounts</Link>
          </Nav.Item>
          <Nav.Item>
            <Link style={this.linkStyle} to="/products" >Products</Link>
          </Nav.Item>
        </Nav>
      )
    }
}

/*
react-router-bootstrap
react-bootstrap
*/
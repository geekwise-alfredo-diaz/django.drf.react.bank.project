import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaDiceSix } from "react-icons/fa";

export class SideBar extends Component {
    render() {
        return (
            <div style={this.sideBarContainerStyle}>
                <div style={this.sideBarContentStyle}>
                    <Link style={this.linkStyle} to="/">H</Link>
                    <Link style={this.linkStyle} to="/branches">B</Link>
                    <Link style={this.linkStyle} to="/holders">H</Link>
                    <Link style={this.linkStyle} to="/accounts">A</Link>
                    <Link style={this.linkStyle} to="/products">P</Link>
                </div>
            </div>
        )
    }

    sideBarContainerStyle = {
        width: '60px',
        backgroundColor: '#1f98d9',
        position: 'relative',
        zIndex: '0',
        top: '0',
        minHeight: '100vh',
    }

    sideBarContentStyle = {
        position: 'sticky',
        top: '55px',
        display: 'flex',
        flexDirection: 'column'
    }

    linkStyle = {
        color: 'white',
        textAlign: 'center'
    }
}

export default SideBar

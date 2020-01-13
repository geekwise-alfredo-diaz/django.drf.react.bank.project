// Native Imports
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

// Icons
import { MdAccountBalance } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { FaUserLock } from 'react-icons/fa';
import { MdAssignmentInd } from 'react-icons/md';
import { FaRegCreditCard } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io'

// Context
import { AuthContext } from '../../context/AuthProvider'

// Auth Actions
import { verifyTeller, verifyManagement } from '../../actions/authActions'

export class SideBar extends Component {
    static contextType = AuthContext

    render() {
        const {isAuthenticated, isLoading} = this.context.auth

        const customerLinks = (
            <Link style={this.linkStyle} to="/products">
                <FaRegCreditCard size={'32px'}/>
            </Link>
        )

        const tellerLinks = (
            <Fragment>
                    <Link style={this.linkStyle} to="/">
                       <FaHome size={'32px'}/>
                    </Link>
                    <Link style={this.linkStyle} to="/branches">
                        <MdAccountBalance size={'32px'}/>
                    </Link>
                    <Link style={this.linkStyle} to="/holders">
                        <FaUserLock size={'32px'}/>
                    </Link>
                    <Link style={this.linkStyle} to="/accounts">
                        <MdAssignmentInd size={'32px'}/>
                    </Link>
                    <Link style={this.linkStyle} to="/products">
                        <FaRegCreditCard size={'32px'}/>
                    </Link>
            </Fragment>
        )

        const managementLinks = (
            <Fragment>
                    <Link style={this.linkStyle} to="/admin">
                        <IoIosPeople size={'32px'}/>
                    </Link>
            </Fragment>
        )

        const outputLinks = () => {
            console.log('Truth: ' + isAuthenticated)
            console.log('IS: ' + verifyTeller(this.context.auth))
            if (isAuthenticated) {
                return (
                    <Fragment>
                        { verifyTeller(this.context.auth) ? tellerLinks : customerLinks }
                        { verifyManagement(this.context.auth) ? managementLinks : null }
                    </Fragment>
                )
            } else {
                return customerLinks
            }
        }

        return (
            <div style={this.sideBarContainerStyle}>
                <div style={this.sideBarContentStyle}>
                    {outputLinks()}
                </div>
            </div>
        )
    }

    sideBarContainerStyle = {
        maxWidth: '60px',
        minWidth: '60px',
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
        textAlign: 'center',
        margin: '10px 0',
    }
}

export default SideBar

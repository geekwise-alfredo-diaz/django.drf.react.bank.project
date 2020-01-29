// Native Imports
import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'

// Icons
import { MdAccountBalance } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
// import { FaUserLock } from 'react-icons/fa';
import { MdAssignmentInd } from 'react-icons/md';
import { FaRegCreditCard } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io'
import { FaUserPlus } from 'react-icons/fa'

// Redux
import { connect } from 'react-redux'

export class SideBar extends Component {

    render() {
        const { auth } = this.props
        const { isAuthenticated } = auth

        const links = (
            <Fragment>
                { auth.authLevel >= 2 ? (
                    <Fragment>
                        <Link style={this.linkStyle} to="/branches">
                            <MdAccountBalance size={'32px'}/>
                        </Link>
                        <Link style={this.linkStyle} to="/register">
                            <FaUserPlus size={'32px'}/>
                        </Link>
                        <Link style={this.linkStyle} to="/products">
                            <FaRegCreditCard size={'32px'}/>
                        </Link>
                    </Fragment>
                ) : null }

                {auth.authLevel === 1 ? (
                    <Fragment>
                        <Link style={this.linkStyle} to="/accounts">
                            <MdAssignmentInd size={'32px'}/>
                        </Link>
                        {/* <Link style={this.linkStyle} to="/holders">
                            <FaUserLock size={'32px'}/>
                        </Link> */}
                    </Fragment>
                ): null}

                { auth.authLevel === 3 ? (
                    <Fragment >
                        <Link style={this.linkStyle} to="/admin">
                            <IoIosPeople size={'32px'}/> 
                        </Link>
                    </Fragment>
                ) : null }

            </Fragment>
        )

        const outputLinks = () => {
            if (isAuthenticated) {
                return (
                    <Fragment>
                        { links }
                    </Fragment>
                )
            } else {
                return <Redirect to="/"/>
            }
        }

        return (
            <div style={this.sideBarContainerStyle}>
                <div style={this.sideBarContentStyle}>
                    <Link style={this.linkStyle} to="/">
                        <FaHome size={'32px'}/>
                    </Link>
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

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(SideBar)
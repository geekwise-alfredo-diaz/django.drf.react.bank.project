import React, { Component } from 'react'

export default class Loading extends Component {
    loadingWrapStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }

    loadingStyle = {
        width: '100px',
        height: '100px',
        borderWidth: '4px',
        marginTop: '-170px',
    }

    textTitle = {

    }

    render() {
        return (
            <div style={this.loadingWrapStyle}>
                <h3 style={this.textTitle}>There may not be accounts registered for this user</h3>
                <div style={this.loadingStyle} className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

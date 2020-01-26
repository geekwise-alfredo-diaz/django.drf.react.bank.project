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
        marginTop: '-200px',
    }

    render() {
        return (
            <div style={this.loadingWrapStyle}>
                <div style={this.loadingStyle} className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

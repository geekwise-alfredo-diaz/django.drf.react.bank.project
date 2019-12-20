import React, { Component } from 'react'

export class Model extends Component {
    render() {
        const {id} = this.props.account;
        return (
            <li style={this.listStyle} className="list-group-item d-flex flex-row">
                <div>
                    {this.props.account.name}
                </div>
                <button style={this.buttonStyle} className="btn-primary" onClick={
                    this.props.deleteAccount.bind(this, id)}>
                    Delete
                </button>
            </li>
        )
    }

    listStyle = {
        position: 'relative',
    }

    buttonStyle = {
        position: 'absolute',
        right: '30px',
    }
}

export default Model

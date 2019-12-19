import React, { Component } from 'react'

export class Model extends Component {
    render() {
        const {id} = this.props.account;
        return (
            <li className="list-group-item">
                <div>
                    {this.props.account.name}
                </div>
                <button className="btn-primary" onClick={
                    this.props.deleteAccount.bind(this, id)}>
                    Delete
                </button>
            </li>
        )
    }
}

export default Model

import React, { Component } from 'react'

export class Model extends Component {
    render() {
        return (
            <li className="list-group-item">
                <div>
                    {this.props.account.name}
                </div>
                <button className="btn-primary" onClick={this.deleteAccount}>
                    Test
                </button>
            </li>
        )
    }
}

export default Model

import React, { Component } from 'react'

export class Model extends Component {
    render() {
        return (
            <li class="list-group-item">
                {this.props.account.name}
            </li>
        )
    }
}

export default Model

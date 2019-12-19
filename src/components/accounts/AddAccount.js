import React, { Component } from 'react'

export class AddAccount extends Component {
    state = {
        name: 'Test'
    }


    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default AddAccount

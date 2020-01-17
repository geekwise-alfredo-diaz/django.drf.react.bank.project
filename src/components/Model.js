// Native Imports
import React, { Component, Fragment } from 'react'

// Context
import { AuthContext } from '../context/AuthProvider'

// Auth Actions
import { getAuthLevel } from '../actions/authActions'

export class Model extends Component {
    static contextType = AuthContext

    state = {
        choice: 'Edit',
        isEditable: false,
        editedName: this.props.item.name,
    }

    toggleEdit = () => {
        this.setState({isEditable: !this.state.isEditable})
        if(!this.state.isEditable) {
            this.setState({choice: 'Confirm Change'})
            this.divStyle = this.highlight()
        } else {
            this.setState({choice: 'Edit'})
            this.divStyle = this.default()
            const { id } = this.props.item;
            this.props.editItem(id, this.state.editedName)
        }
    }

    onEdit = (name) => {
        this.setState({editedName: name.target.innerHTML})
    }

    render() {
        const { auth } = this.context
        const {id} = this.props.item;
        return (
            <li style={this.listStyle} className="list-group-item d-flex flex-row">
                <div onBlur={this.onEdit} contentEditable={this.state.isEditable}
                suppressContentEditableWarning={true} style={this.divStyle}
                >
                    {this.state.editedName} 
                </div>
                <div className="d-flex flex-row" style={this.buttonWrapStyle}>

                    {getAuthLevel(auth) > 1 ? (
                    <Fragment>
                        <button style={this.buttonStyle} className="btn-primary" 
                        onClick={this.toggleEdit}>
                            {this.state.choice}
                        </button>

                        <div style={this.spaceStyle}></div>
                        <button className="btn-danger" onClick={
                            this.props.deleteItem.bind(this, id)}>
                            Delete
                        </button>
                    </Fragment>): null}
                    
                </div>
            </li>
        )
    }

    listStyle = {
        position: 'relative',
    }

    buttonStyle = {
        marginLeft: '-10px',
    }

    buttonWrapStyle = {
        position: 'absolute',
        right: '40px',
    }

    spaceStyle = {
        width: '15px',
    }

    divStyle = {}

    highlight = () => {
        return {
            border: '1px solid #d6d6ff',
            backgroundColor: '#d5e9fb',
            padding: '0 10px',
            borderRadius: '4px',
        }
    }

    default = () => {
        return {}
    }
}

export default Model

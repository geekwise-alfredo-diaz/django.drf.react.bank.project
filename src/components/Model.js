import React, { Component } from 'react'

export class Model extends Component {
    state = {
        choice: 'Edit',
        isEditable: false,
        editedName: this.props.item.name,
    }

    toggleEdit = () => {
        this.setState({isEditable: !this.state.isEditable})
        console.log(this.state.isEditable);
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
        const {id} = this.props.item;
        return (
            <li style={this.listStyle} className="list-group-item d-flex flex-row">
                <div onBlur={this.onEdit} contentEditable={this.state.isEditable}
                suppressContentEditableWarning={true} style={this.divStyle}
                >
                    {this.state.editedName} 
                </div>
                <div className="d-flex flex-row" style={this.buttonWrapStyle}>

                    <button style={this.buttonStyle} className="btn-primary" 
                    onClick={this.toggleEdit}>
                        {this.state.choice}
                    </button>

                    <div style={this.spaceStyle}></div>
                    <button className="btn-danger" onClick={
                        this.props.deleteItem.bind(this, id)}>
                        Delete
                    </button>
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

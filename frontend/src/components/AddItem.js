import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        name: ''
    }

    updateName = (text)=> {
        this.setState({name: text.target.value})
    }

    registerName = (text) => {
        text.preventDefault();
        this.props.addItem(this.state.name)
        this.setState({name: ''})
    }

    render() {
        return (
            <form onSubmit={this.registerName} className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <input type="submit" className="input-group-text" id="addon-wrapping"/>
              </div>
              <input name="submit" onChange={this.updateName} 
              value={this.state.name} type="text" className="form-control" 
              placeholder={this.props.placeholder}/>
            </form>
        )
    }
}

export default AddItem

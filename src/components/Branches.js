import React, { Component } from 'react';
import axios from 'axios';

export class Branches extends Component {

    state = {
        branchList: []
    };
  
    // Refresh branches the moment component loads
    componentDidMount() {
      this.refreshList();
    }
  
    // Gets branches from db
    refreshList = () => {
      axios
        .get("https://g-f-django-bank-app.herokuapp.com/branches/")
        .then(res => this.setState({ branchList: res.data }))
        .catch(err => console.log(err));
    };
  
    // Renders branches
    renderBranches = () => {
      let branches = this.state.branchList;
  
      return branches.map(customer => (
        <li
          key={customer.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            className={`todo-title mr-2`}
          >
            {customer.name}
          </span>
        </li>
      ));
    };

    render() {
        return (
            <div>
                {this.renderBranches()}
            </div>
        )
    }
}

export default Branches
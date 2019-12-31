import React, { Component } from 'react';
import axios from 'axios';

import Model from './Model';
import AddItem from './AddItem';

let CancelToken = axios.CancelToken;
let cancel;

export class Branches extends Component {

    state = {
        branchList: []
    };
  
    // Refresh branches the moment component loads
    componentDidMount() {
      this.refreshBranches();
    }

    componentWillUnmount() {
      cancel();
    }

    deleteItem = (branchId)=> {
      axios.delete(`https://g-f-django-bank-app.herokuapp.com/branches/${branchId}/`)
      .then(res => this.setState({branchList: this.state.branchList.filter(
          branch => branch.id !== branchId
      )}))
    }

    updateBranch = (branchId, branchName) => {
        let body = {
          id: branchId,
          name: branchName
      }

      axios.put(`https://g-f-django-bank-app.herokuapp.com/branches/${branchId}/`, body)
      .then(res => {
          this.refreshBranches();
      }).catch(err => console.log(err));
    }

    addBranches = (submitText)=> {
      axios.post('https://g-f-django-bank-app.herokuapp.com/branches/',
      {
          name: submitText
      }).then(res => this.refreshBranches())
      .catch(err => console.log(err));
    }
  
    // Gets branches from db
    refreshBranches = () => {
      let cancelToken = new CancelToken(function executor(c) {
          cancel = c;
        })
      axios.get('https://g-f-django-bank-app.herokuapp.com/branches/', {
          cancelToken: cancelToken
      })
      .then(res => this.setState({branchList: res.data}))
      .catch(err => console.log(err))
    };
  
    // Renders branches
    renderBranches = () => {
      let branches = this.state.branchList;
  
      return branches.map(branch => (
        <Model deleteItem={this.deleteItem} editItem={this.updateBranch} key={branch.id} item={branch}/>
      ));
    };

    render() {
        return (
            <div>
                <AddItem addItem={this.addBranches} placeholder={'Branch name'}/>
                {this.renderBranches()}
            </div>
        )
    }
}

export default Branches
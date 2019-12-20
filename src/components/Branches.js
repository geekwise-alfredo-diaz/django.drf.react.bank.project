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
      this.refreshList();
    }

    componentWillUnmount() {
      cancel();
    }

    deleteItem = (e)=> {
      console.log(e);
    }

    addItem = (e)=> {
      console.log(e);
    }
  
    // Gets branches from db
    refreshList = () => {
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
  
      return branches.map(customer => (
        <Model deleteItem={this.deleteItem} key={customer.id} item={customer}/>
      ));
    };

    render() {
        return (
            <div>
                <AddItem addItem={this.addItem} placeholder={'Branch name'}/>
                {this.renderBranches()}
            </div>
        )
    }
}

export default Branches
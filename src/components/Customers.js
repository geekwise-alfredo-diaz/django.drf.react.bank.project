import React, { Component } from 'react'
import axios from 'axios';

import Model from './Model'
import AddItem from './AddItem'

let CancelToken = axios.CancelToken;
let cancel;

export class Customers extends Component {

    state = {
        customersList: []
    };
  
    // Refresh customers the moment component loads
    componentDidMount() {
      this.refreshList();
    }

    componentWillUnmount() {
      cancel();
    }

    deleteCustomer = (e)=> {
      console.log(e)
    }

    addCustomer = (e)=> {
      console.log(e)
    }
  
    // Gets customers from db
    refreshList = () => {
        let cancelToken = new CancelToken(function executor(c) {
            cancel = c;
          })
        axios.get('https://g-f-django-bank-app.herokuapp.com/customers/', {
            cancelToken: cancelToken
        })
        .then(res => this.setState({customersList: res.data}))
        .catch(err => console.log(err))
    };
  
    // Renders customers
    renderCustomers = () => {
      let customers = this.state.customersList;
  
      return customers.map(customer => (
        <Model deleteItem={this.deleteCustomer} key={customer.id} item={customer}/>
      ));
    };

    render() {
        return (
            <div>
                <AddItem placeholder={"Holder's name"} addItem={this.addCustomer}/>
                {this.renderCustomers()}
            </div>
        )
    }
}

export default Customers

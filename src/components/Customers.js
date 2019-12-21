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
      this.refreshCustomers();
    }

    componentWillUnmount() {
      cancel();
    }

    deleteCustomer = (customerId)=> {
      axios.delete(`https://g-f-django-bank-app.herokuapp.com/customers/${customerId}/`)
      .then(res => this.setState({customersList: this.state.customersList.filter(
          customer => customer.id !== customerId
      )}))
    }

    addCustomer = (submitText)=> {
      axios.post('https://g-f-django-bank-app.herokuapp.com/customers/',
      {
          name: submitText
      }).then(res => this.refreshCustomers())
      .catch(err => console.log(err));
    }
  
    // Gets customers from db
    refreshCustomers = () => {
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

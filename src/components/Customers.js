import React, { Component } from 'react'
import axios from 'axios';
let CancelToken = axios.CancelToken

export class Customers extends Component {

    state = {
        customersList: []
    };
  
    // Refresh customers the moment component loads
    componentDidMount() {
      this.refreshList();
    }
  
    // Gets customers from db
    refreshList = () => {
        let cancel
        let cancelToken = new CancelToken(function executor(c) {
            cancel = c;
          })
        axios.get('https://g-f-django-bank-app.herokuapp.com/customers/', {
            cancelToken: cancelToken
        })
        .then(res => this.setState({customersList: res.data}))
        .catch(err => console.log(err))
        // cancel()
    };
  
    // Renders customers
    renderCustomers = () => {
      let customers = this.state.customersList;
  
      return customers.map(customer => (
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
                {this.renderCustomers()}
            </div>
        )
    }
}

export default Customers

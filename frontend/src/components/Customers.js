import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getCustomers, deleteCustomer, addCustomer, updateCustomer } from '../actions/customers';

import Model from './Model'
import AddItem from './AddItem'

export class Customers extends Component {
    static propTypes = {
      customers: PropTypes.array.isRequired,
    }
  
    // Refresh customers the moment component loads
    componentDidMount() {
      this.refreshCustomers();
    }

    updateCustomer = (customerId, customerName) => {
        let body = {
          id: customerId,
          name: customerName
      }
      console.log("Edited Customer? " + body.name);
      this.props.updateCustomer(customerId, customerName);
    }

    deleteCustomer = (customerId)=> {
      this.props.deleteCustomer(customerId);
    }

    addCustomer = (submitText)=> {
      this.props.addCustomer(submitText)
    }
  
    // Gets customers from db
    refreshCustomers = () => {
      this.props.getCustomers();
    };
  
    // Renders customers
    renderCustomers = () => {
      let customers = this.props.customers;
  
      return customers.map(customer => (
        <Model deleteItem={this.deleteCustomer} editItem={this.updateCustomer}
         key={customer.id} item={customer}/>
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

const mapStateToProps = state => ({
  customers: state.customers.customers
})

export default connect(mapStateToProps, 
  { getCustomers, deleteCustomer, addCustomer, updateCustomer })(Customers);
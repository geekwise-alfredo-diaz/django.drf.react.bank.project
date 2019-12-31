import React, { Component } from 'react'
import axios from 'axios'

import Model from './Model';
import AddItem from './AddItem';

let CancelToken = axios.CancelToken;
let cancel;

export class Products extends Component {

    state = {
        productsList: [],
    }

    componentDidMount() {
        this.refreshProducts();
    }

    componentWillUnmount() {
        cancel();
    }

    deleteProducts = (productId)=> {
        axios.delete(`https://g-f-django-bank-app.herokuapp.com/products/${productId}/`)
        .then(res => this.setState({productsList: this.state.productsList.filter(
            product => product.id !== productId
        )}))
    }
    
    addProducts = (submitText)=> {
        axios.post('https://g-f-django-bank-app.herokuapp.com/products/',
        {
            name: submitText
        }).then(res => this.refreshProducts())
        .catch(err => console.log(err));
    }

    // Gets products from db
    refreshProducts = () => {
        let cancelToken = new CancelToken(function executor(c) {
            cancel = c;
          })
        axios.get('https://g-f-django-bank-app.herokuapp.com/products/', {
            cancelToken: cancelToken
        })
        .then(res => this.setState({productsList: res.data}))
        .catch(err => console.log(err))
    }

    updateProduct = (productId, productName) => {
        let body = {
          id: productId,
          name: productName
      }

      axios.put(`https://g-f-django-bank-app.herokuapp.com/products/${productId}/`, body)
      .then(res => {
          this.refreshAccounts();
      }).catch(err => console.log(err));
    }

    renderProducts = () => {
        return this.state.productsList.map(product => (
            <Model 
                deleteItem={this.deleteProducts} editItem={this.updateProduct}
                item={product} key={product.id}
            />
        ))
    }

    render() {
        return (
            <div>
                <AddItem addItem={this.addProducts}
                placeholder={"Product's name"}
                />
                {this.renderProducts()}
            </div>
        )
    }
}

export default Products

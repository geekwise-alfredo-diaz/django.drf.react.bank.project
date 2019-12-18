import React, { Component } from 'react'
import axios from 'axios'
let CancelToken = axios.CancelToken;

export class Products extends Component {

    state = {
        productsList: [],
    }

    componentDidMount() {
        this.refreshProducts();
    }

    // Gets products from db
    refreshProducts = () => {
        let cancel
        let cancelToken = new CancelToken(function executor(c) {
            cancel = c;
          })
        axios.get('https://g-f-django-bank-app.herokuapp.com/products/', {
            cancelToken: cancelToken
        })
        .then(res => this.setState({productsList: res.data}))
        .catch(err => console.log(err))
        // cancel()
    }

    renderProducts = () => {
        return this.state.productsList.map(product => (
            <li
            key={product.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            >
                <span
                  className={`todo-title mr-2`}
                >
                  {product.name}
                </span>
          </li>
        ))
    }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        )
    }
}

export default Products

import React, { Component } from 'react'
import axios from 'axios'

export class Products extends Component {

    state = {
        productsList: [],
    }

    componentDidMount() {
        this.refreshProducts();
    }

    // Gets products from db
    refreshProducts = () => {
        axios.get('https://g-f-django-bank-app.herokuapp.com/branches/')
        .then(res => this.setState({productsList: res.data}))
        .catch(err => console.log(err));
    }

    renderProducts = () => {
        return this.state.productsList.map(product => (
            <div>
                {product.name}
            </div>
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

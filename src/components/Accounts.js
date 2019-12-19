import React, { Component } from 'react';
import axios from 'axios';
import Model from './accounts/Model';

let CancelToken = axios.CancelToken;
let cancel;

export class Accounts extends Component {
    state = {
        accountsList: [],
    }

    deleteAccount = (index)=> {
        index = this.props.account.id;
        axios.delete(`https://g-f-django-bank-app.herokuapp.com/accounts/${index}`)
        .then(res => this.setState({accountsList: this.state.accountsList.filter(
            account => account.id !== index
        )}))
    }

    componentDidMount() {
        this.refreshAccounts()
    }

    componentWillUnmount() {
        cancel();
    }


    refreshAccounts = () => {
        let cancelToken = new CancelToken(function executor(c) {
            cancel = c;
          })
        axios.get('https://g-f-django-bank-app.herokuapp.com/accounts/', {
            cancelToken: cancelToken
        })
        .then(res => {this.setState({accountsList: res.data})
        })
        .catch(err => console.log(err))
    }

    renderAccounts = () => {
        let accountsList = this.state.accountsList
        
        return accountsList.map(account => (
            <Model key={account.id} account={account}/>
        ));
    };

    render() {
        return (
            <div>
                {this.renderAccounts()}
            </div>
        )
    }
}

export default Accounts

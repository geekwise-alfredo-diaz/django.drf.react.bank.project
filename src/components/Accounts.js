import React, { Component } from 'react';
import axios from 'axios';
import Model from './accounts/Model';
import AddAccount from './accounts/AddAccount'

let CancelToken = axios.CancelToken;
let cancel;

export class Accounts extends Component {
    state = {
        accountsList: [],
    }

    deleteAccount = (accountId)=> {
        // console.log(acc)
        axios.delete(`https://g-f-django-bank-app.herokuapp.com/accounts/${accountId}/`)
        .then(res => this.setState({accountsList: this.state.accountsList.filter(
            account => account.id !== accountId
        )}))
        console.log('Del');
    }
    
    addAccount = (submitText)=> {
        axios.post('https://g-f-django-bank-app.herokuapp.com/accounts/',
        {
            name: submitText
        }).then(res => this.refreshAccounts())
        .catch(err => console.log(err));
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
            <Model deleteAccount={this.deleteAccount} key={account.id} account={account}/>
        ));
    };

    render() {
        return (
            <div>
                <div>
                    <AddAccount
                        addAccount={this.addAccount}
                    />
                </div>
                <div>
                    {this.renderAccounts()}
                </div>
            </div>
        )
    }
}

export default Accounts

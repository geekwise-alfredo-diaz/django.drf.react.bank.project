import React, { Component } from 'react'
import axios from 'axios'
let CancelToken = axios.CancelToken;
let cancel;

export class Accounts extends Component {
    state = {
        accountsList: [],
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
                <li
                key={account.id}
                className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <span
                      className={`todo-title mr-2`}
                    >
                      {account.name}
                    </span>
                </li>
            
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

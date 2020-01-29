// Native Imports
import React, { Component } from 'react';

// Components
import Model from './Model';
import AddItem from './AddItem'
import Loading from './common/Loading'

// Redux
import { connect } from 'react-redux'

// Actions
import { addAccount, refreshAccounts, deleteAccount } from '../actions/accounts'

export class Accounts extends Component {
    state = {
        accountsList: [],
    }

    componentDidMount() {
        this.props.refreshAccounts()
    }

    deleteAccount = () => {
        return '';
    }

    updateAccount = () => {
        return '';
    }

    addAccount = () => {
        return '';
    }

    renderAccounts = () => {
        let accountsList = this.props.accounts

        if(accountsList.length > 1) {
            return accountsList.map(account => (
                <Model deleteItem={this.deleteAccount} editItem={this.updateAccount}
                key={account.id} item={account}/>
            )); 
        } else {
            return <Loading />
        }
        

    };

    branchStyle = {
        width: '100%',
        marginTop: '55px',
    }

    render() {
        return (
            <div style={this.branchStyle}>
                <div>
                    <AddItem 
                    placeholder={"Account's name"} addItem={this.addAccount}
                    />
                </div>
                <div>
                    {this.renderAccounts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    accounts: state.accounts
})

export default connect(mapStateToProps, { addAccount, refreshAccounts, deleteAccount })(Accounts)

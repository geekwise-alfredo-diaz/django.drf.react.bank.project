// Native Imports
import React, { Component, Fragment } from 'react';

// Components
import Model from './Model';
import AddItem from './AddItem'
import Loading from './common/Loading'

// Redux
import { connect } from 'react-redux'

// Actions
import { addAccount, refreshAccounts, deleteAccount } from '../actions/accounts'

class Accounts extends Component {

    componentDidMount() {
        console.log(this.props)
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
        console.log('Accountlist: ' + accountsList)
        
        if(accountsList.length > 0) {
            return (
              <Fragment>

                <AddItem placeholder={"Account's name"} addItem={this.addAccount}/>
                {accountsList.map(account => (
                <Model deleteItem={this.deleteAccount} editItem={this.updateAccount}
                key={account.id} item={account}/>))}

              </Fragment>);
          } else {
              return (
                  <Fragment>
                    <Loading />
                  </Fragment>
                
              )
          }
    };

    branchStyle = {
        width: '100%',
        marginTop: '55px',
    }

    warningStyle = {
        position: 'absolute',
        top: '180px',
        width: '100%',
        textAlign: 'center'
    }

    render() {
        return (
            <div style={this.branchStyle}>
                {this.renderAccounts()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    accounts: state.accounts
})

export default connect(mapStateToProps, { addAccount, refreshAccounts, deleteAccount })(Accounts)

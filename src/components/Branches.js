// Modules
import React, { Component, Fragment } from 'react';

// Components
import Model from './Model';
import AddItem from './AddItem';
import Loading from './common/Loading'

// Actions
import { headerChange } from '../actions/auth'
import { getBranches, deleteBranch, updateBranch, addBranch } from '../actions/branches'

// Redux
import { connect } from 'react-redux'

class Branches extends Component {

    // Gets Branches When Component Loads 
    componentDidMount(){
      console.log(this.props)
      this.props.getBranches();
      this.props.headerChange('Branches');
    }

    deleteBranches = (branchId)=> {
      this.props.deleteBranch(branchId)
    }

    updateBranches = (branchId, branchName) => {
      this.props.updateBranch(branchId, branchName);
    }

    addBranches = (submitText) => {
      this.props.addBranch(submitText);
    } 
    

    renderBranches = () => {
      let branches = this.props.branches;

      // If statement needed to render time bug atm
      if(branches.length > 1) {
        return (
          <Fragment>
            <AddItem addItem={this.addBranches} placeholder={'Branch name'}/>
            {branches.map(branch => (
              <Model deleteItem={this.deleteBranches} editItem={this.updateBranches}
              key={branch.id} item={branch}/>
            ))}
          </Fragment>);
      } else {
          return (
            <Loading />
          )
      }
      
    };

    branchStyle = {
      width: '100%',
      marginTop: '55px',
    }

    render() {
      return (
        <div style={this.branchStyle}>
          {this.renderBranches()}
        </div>
        )
    }
}

const mapStateToProps = state => ({
  branches: state.branches,
})

export default connect(mapStateToProps, 
  { getBranches, deleteBranch, updateBranch, addBranch, headerChange })(Branches);
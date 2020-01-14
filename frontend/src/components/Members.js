// Modules
import React, { useEffect, useContext } from 'react'

// Components
import Model from './Model'
import AddItem from './AddItem'

// Context
import { MemberContext } from '../context/MemberProvider'

// Actions
import { getCustomers, deleteCustomer, addCustomer, updateCustomer } from '../actions/memberActions';

export default function Members() {
    const { members, dispatch } = useContext(MemberContext);

    // Refresh customers the moment component loads
    useEffect(() => {
      getCustomers(dispatch);
    })

    const updateMember = (customerId, customerName) => {
        updateCustomer(customerId, customerName, dispatch);
    }

    const deleteMember = (customerId)=> {
      deleteCustomer(customerId, dispatch);
    }

    const addMember = (submitText)=> {
        addCustomer(submitText, dispatch)
    }
  
    // Renders customers
    const renderCustomers = () => {  
      return members.map(member => (
        <Model deleteItem={deleteMember} editItem={updateMember}
         key={member.id} item={member}/>
      ));
    };

    const branchStyle = {
      width: '100%',
      marginTop: '55px',
    }

    return (
            <div style={branchStyle}>
                <AddItem placeholder={"Holder's name"} addItem={addMember}/>
                {renderCustomers()}
            </div>
    )
}
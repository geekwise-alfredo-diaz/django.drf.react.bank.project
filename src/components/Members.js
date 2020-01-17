// Modules
import React, { useEffect, useContext } from 'react'

// Components
import Model from './Model'
import AddItem from './AddItem'

// Context
import { MemberContext } from '../context/MemberProvider'
import { AuthContext } from '../context/AuthProvider'

// Actions
import { getCustomers, deleteCustomer, addCustomer, updateCustomer } from '../actions/memberActions';
import { getAuthLevel } from '../actions/authActions'

export default function Members() {
    const { members, dispatch } = useContext(MemberContext);
    const authContext = useContext(AuthContext)
    const { auth } = authContext

    // Refresh customers the moment component loads
    useEffect(() => {
      getCustomers(dispatch);
      authContext.dispatch({
        type: 'HEADER_CHANGE',
        payload: 'Members',
      })
    }, [])

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
                {getAuthLevel(auth) > 1 ? (
                  <AddItem placeholder={"Holder's name"} addItem={addMember}/>
                ) : null}
                
                {renderCustomers()}
            </div>
    )
}
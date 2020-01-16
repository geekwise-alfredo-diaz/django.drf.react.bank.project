// Modules
import React, { useEffect, useContext } from 'react'

// Context
import { StaffContext } from '../context/StaffProvider'

// Actions
import { getStaffMembers } from '../actions/BankAdminActions'

export default function Members() {
    const { staff, dispatch } = useContext(StaffContext);

    // Refreshes Staff On Component Load
    useEffect(() => {
        getStaffMembers(dispatch);
    })

    // Renders Staff Members
    const renderStaff = () => {  
      return staff.map(staffMember => (
            <li key={staffMember.pk} className="list-group-item d-flex flex-row">
                {staffMember.fields.username} 
            </li>

      ));
    };

    // Returns Staff List
    return (
            <div style={{width: '100%', marginTop: '55px'}}>
                {renderStaff()}
            </div>
    )
}
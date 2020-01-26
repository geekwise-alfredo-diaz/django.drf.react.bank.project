// Modules
import React, { Component } from 'react'

// Components
import Loading from './common/Loading'

// Actions
import { getStaffMembers } from '../actions/BankAdminActions'
import { headerChange } from '../actions/auth'

// Redux
import { connect } from 'react-redux'

class Members extends Component {
    // Refreshes Staff On Component Load
    componentDidMount() {
        this.props.headerChange('Management');
        this.props.getStaffMembers();
        console.log(this.props)
    }

    // Renders Staff Members
    renderStaff = () => {
        let staff = this.props.staff
        // If statement needed to render time bug atm
          if(staff.length > 1) {
            return staff.map(staffMember => (
                <li key={staffMember.pk} className="list-group-item d-flex flex-row">
                    {staffMember.fields.username} 
                </li>
            ));
          } else {
              return <Loading />
          }
    };

    // Returns Staff List
    render() {
        return (
            <div style={{width: '100%', marginTop: '55px'}}>
                {this.renderStaff()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    staff: state.staff
})

export default connect(mapStateToProps, { headerChange, getStaffMembers })(Members)
import React, { Component } from 'react'

import { FaDiceSix } from "react-icons/fa";

export class SideBar extends Component {
    render() {
        return (
            <div style={this.sideBarContainerStyle}>
                <FaDiceSix />
            </div>
        )
    }

    sideBarContainerStyle = {
        width: '60px',
        backgroundColor: 'black'
    }
}

export default SideBar

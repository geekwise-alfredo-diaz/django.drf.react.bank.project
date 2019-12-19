import React, { Component } from 'react'

export class Home extends Component {
    jumboStyle = {
        height: '100vh'
    }

    render() {
        return (
            <div style={this.jumboStyle} className="jumbotron">
              <h1 className="display-4">Fredo Banks</h1>
              <p className="lead">Can't lend money, but can save it for u for a at a interest rate :)</p>
              <hr className="my-4"/>
              <p>You know, the more you know.</p>
              <div className="btn btn-primary btn-lg" role="button">Know more</div>
            </div>
        )
    }
}

export default Home

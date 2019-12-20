import React, { Component } from 'react'

export class Home extends Component {
    state = {
        know: '',
    }

    inTheKnow = {
        marginTop: '20px',
    }

    jumboStyle = {
        height: '100vh',
    }

    knows = ()=> {
        this.setState({know: 'now u know'});
    }

    render() {
        return (
            <div style={this.jumboStyle} className="jumbotron">
              <h1 className="display-4">Fredo Banks</h1>
              <p className="lead">Can't lend money, but high can save it for u for a at a interest rate :)</p>
              <hr className="my-4"/>
              <p>You know, the more you know.</p>
              <div onClick={this.knows} className="btn btn-primary btn-lg" role="button">Know more</div>
              <p style={this.inTheKnow}>{this.state.know}</p>
            </div>
        )
    }
}

export default Home

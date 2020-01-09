import React, { Component } from 'react'

export class Home extends Component {
    state = {
        know: '',
    }

    inTheKnow = {
        marginTop: '20px',
    }

    jumboStyle = {
        width: '100%',
        height: '100vh',
        backgroundColor: '#f1f1f1',
        margin: 0,
        padding: '100px',
    }

    knows = ()=> {
        this.setState({know: 'now u know'});
    }

    render() {
        return (
            <div style={this.jumboStyle} className="jumbotron">
              <h1 className="display-4">Six De Greece</h1>
              <p className="lead">Lends money, and save it for you at a good rate :)</p>
              <hr className="my-4"/>
              <p>You know, the more you know.</p>
              <div onClick={this.knows} className="btn btn-primary btn-lg" role="button">Know more</div>
              <p style={this.inTheKnow}>{this.state.know}</p>
            </div>
        )
    }
}

export default Home

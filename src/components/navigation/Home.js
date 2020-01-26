// Native Imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { headerChange } from '../../actions/auth'

export class Home extends Component {
    imgStyle = {
        width: '100%',
        dispaly: 'block',
        height: '225px',
    }

    pStyle = {
        padding: '0 15%',
        display: 'flex',
        justifyContent: 'space-around',
    }

    sectionStyle = {
        marginTop: '75px',
    }

    componentDidMount(){
        this.props.headerChange('Home');
        // this.props.auth.isAuthenticated ? getAuthLevel(this.props.auth) : null;
    }

    render() {
        return (
            <div style={{width: '100%', overflow: 'hidden'}}>

                <section style={this.sectionStyle} className="text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">TBD</h1>
                        <p className="lead text-muted">TBD is a Member Relationship Management solution made exclusively for credit unions.</p>
                        <p style={this.pStyle}>
                        <Link to="/" className="btn btn-primary my-2">Get Started</Link>
                        <Link to="/" className="btn btn-secondary my-2">Know More</Link>
                        </p>
                    </div>
                </section>

                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Pro</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title"><small className="text-muted"></small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>100 GB of storage</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                    </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Enterprise</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title"> <small className="text-muted"></small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Unlimited storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                    </div>
                    </div>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  })
  
export default connect(mapStateToProps, { headerChange })(Home);
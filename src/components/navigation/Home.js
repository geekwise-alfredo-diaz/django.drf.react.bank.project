import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import sixdegreece from '../../sixdegreece.jpg'

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

    render() {
        return (
            <div style={{width: '100%', overflow: 'hidden'}}>

                <section style={this.sectionStyle} className="text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Six Dé Greece</h1>
                        <p className="lead text-muted">Six Dé Greece is a Member Relationship Management solution made exclusively for credit unions.</p>
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
                        <h1 className="card-title pricing-card-title">$56 <small className="text-muted">/ mo</small></h1>
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
                        <h1 className="card-title pricing-card-title">$96 <small className="text-muted">/ mo</small></h1>
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

export default Home

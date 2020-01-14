import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import sixdegreece from '../../sixdegreece.jpg'

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

                <div style={{margin: '25px 0 0 0', paddingTop: '20px'}} className="album bg-light">
                    <div className="container">

                        <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="card mb-4 box-shadow">
                            <img alt='Six Dè Greece' src={sixdegreece} className="card-img-top" style={this.imgStyle}/>
                            <div className="card-body">
                                <p className="card-text">6 Dè Greece makes it simple for business development and marketing to create customized reports tracking progress toward organizational goals.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">View More</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>        
    )
    }
}

export default Home

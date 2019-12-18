import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/"><div className="navbar-brand">Fredo Banks</div></Link>
          <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div  className="navbar-nav">
              <Link to="/"><a  className="nav-item nav-link">Home <span  className="sr-only">(current)</span></a></Link>
              <Link to="/branches"><a  className="nav-item nav-link">Branches</a></Link>
              <Link to="/customers"><a  className="nav-item nav-link">Customers</a></Link>
              <Link to="/accounts"><a  className="nav-item nav-link" tabIndex="-1" aria-disabled="true">Accounts</a></Link>
              <Link to="/products"><a  className="nav-item nav-link" tabIndex="-1" aria-disabled="true">Products</a></Link>
            </div>
          </div>
        </nav>
    )
}

/*
react-router-bootstrap
react-bootstrap
*/
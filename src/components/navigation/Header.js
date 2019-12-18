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
              <Link to="/"><div  className="nav-item nav-link">Home <span  className="sr-only">(current)</span></div></Link>
              <Link to="/branches"><div  className="nav-item nav-link">Branches</div></Link>
              <Link to="/customers"><div  className="nav-item nav-link">Customers</div></Link>
              <Link to="/accounts"><div  className="nav-item nav-link">Accounts</div></Link>
              <Link to="/products"><div  className="nav-item nav-link">Products</div></Link>
            </div>
          </div>
        </nav>
    )
}

/*
react-router-bootstrap
react-bootstrap
*/
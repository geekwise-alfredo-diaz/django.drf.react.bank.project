import React from 'react'

export default function Header() {
    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-light">
          <a  className="navbar-brand" href="http://localhost:3001">Fredo Banks</a>
          <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div  className="navbar-nav">
              <a  className="nav-item nav-link" href="http://localhost:3001">Home <span  className="sr-only">(current)</span></a>
              <a  className="nav-item nav-link" href="http://localhost:3001/Branches">Branches</a>
              <a  className="nav-item nav-link" href="http://localhost:3001/Customers">Customers</a>
              <a  className="nav-item nav-link" href="http://localhost:3001/Accounts" tabIndex="-1" aria-disabled="true">Accounts</a>
              <a  className="nav-item nav-link" href="http://localhost:3001/Products" tabIndex="-1" aria-disabled="true">Products</a>
            </div>
          </div>
        </nav>
    )
}

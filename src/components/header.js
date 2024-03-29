import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Header() {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/post"> Create-Post<span className="sr-only"></span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/logout">Logout<span className="sr-only"></span></Link>
            </li>
            
          </ul>
          
        </div>
        
      </nav>

    </div>
  )
}
Header.defaultProps = {
    title : "default Title",
    searchBar: true
}

Header.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool.isRequired
}
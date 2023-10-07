import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar(props) {
  const location = useLocation(); // get current location
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand mx-1" to="/"><img src={logo} width={42} alt="logo"/></Link>
            <Link className="navbar-brand ms-1 me-4" id="brand-name" to="/">{props.title}</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`} to="/features">Features</Link>
                </li>
                </ul>

                <div className={`nav-item form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="darkMode" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="darkMode">Dark Mode</label>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Set Title',
}

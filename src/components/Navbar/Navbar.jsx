/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="d-sm-flex">
        <a className="nav-logo navbar-brand" href="https://elevationchurch.org/"> 
          <img  src="images/ElevationLogoFullColor128x32.png" alt="Elevation Logo" /> 
        </a>
        <div className="">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">SERMONS</a>  
            </li>  
            <li className="nav-item">
              <a className="nav-link" href="#">LOCATIONS</a>  
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>  
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="#">GET INVOLVED</a>  
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="#">STORES</a>  
            </li>  
          </ul>
        </div>
      </div>  
    </nav>
  )
}

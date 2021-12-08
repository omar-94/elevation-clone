import React from 'react';
import "./style.scss";

export default function Navbar() {
  return (
    <div className="navbar flex">
      <a className="nav-logo navbar-brand" href="https://elevationchurch.org/"> 
        <img  src="images/ElevationLogoFullColor128x32.png" alt="Elevation Logo" /> 
      </a>
    </div>
  )
}

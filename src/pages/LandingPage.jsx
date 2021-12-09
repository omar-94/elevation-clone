import React from 'react';
import Cards from "../components/Cards/Cards";

const titleStyle = {
  fontFamily: 'Montserrat',
  fontWeight: '700',
  fontSize: '35px',
  // letterSpacing: '.1rem',
  marginTop: '5rem',
}

const subTitleStyle = {
  fontFamily: 'Open Sans',
  fontWeight: '300',
  fontSize: '18px',
  color: 'slategrey'
  // letterSpacing: '.1rem',
  // marginTop: '5rem',
}

const landingStyle = {
  marginLeft: '1rem',
  marginRight: '1rem',
}

export default function LandingPage() {
  return (
    <div>
      <div style={landingStyle}>
        <span style={titleStyle} className="d-flex justify-content-center align-items-center text-center">
          Choose your community
        </span>
        <span style={subTitleStyle} className="d-flex justify-content-center align-items-center text-center">
          Whether you are visiting a local campus or joining us online for the very first time, we cant wait to connect with you
        </span>
      </div>

      <Cards />    
    </div>
  )
}

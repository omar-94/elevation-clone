import React from 'react';
import "./style.scss";

export default function Footer() {
  return (
    <div className="fixed-bottom">
    <div className="main-footer">
      <div className="container footer-menu-cont">
        <div className="row">
          <div className="col">
            <h6 className="sub-title">About</h6>
            <ul className="list-unstyled">
              <li>Beliefs</li>
              <li>Values</li>
              <li>Leadership</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="sub-title">Media</h6>
            <ul className="list-unstyled">
              <li>Sermons</li>
              <li>Watch Online</li>
              <li>Elevation Store</li>
              <li>Worship</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="sub-title">Ministries</h6>
            <ul className="list-unstyled">
              <li>eGroups</li>
              <li>eKidz</li>
              <li>Youth</li>
              <li>Outreach</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="sub-title">Opportunities</h6>
            <ul className="list-unstyled">
              <li>Jobs</li>
              <li>Internships</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="sub-title">Join Us</h6>
            <ul className="list-unstyled">
              <li>Find a Location</li>
              <li>Watch Parties</li>
              <li>Events</li>
            </ul>
            <h6 className="sub-title">For Churches</h6>
            <ul className="list-unstyled">
              <li>Inside Elevation</li>
              <li>Church Resources</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="sub-title">Finance</h6>
            <ul className="list-unstyled">
              <li>Giving</li>
              <li>Annual Report</li>
            </ul>
            <h6 className="sub-title">Personal</h6>
            <ul className="list-unstyled">
              <li>MyElevation</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm contact">
            11416 E. Independence Blvd, Suite N, Matthews, NC, 28105   |   <a className="phone-number" href="tel:704-246-0800">(704) 246-0800</a>
          </p>
        </div>
      </div>  
    </div>
    <div className="container copyright">
    <div className="row justify-content-start">
      <p className="col-4">
        &copy; 2021 Elevation Church. All Rights Reserved 
        </p>
      <span className="col-6 term-privacy-link">
        Terms of Use | Privacy Policy
      </span>
    </div>
  </div>
  </div>
  )
}

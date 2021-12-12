import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';


export default function Cards() {
  return (
    <div className="container">
      <div className="row justify-content-around ">

        <div className="col-5 d-flex justify-content-center">
          <div className="card">
              <Link to="/CampusCommunity" style={{ textDecoration: 'none', color: 'inherit'}}>
                <img className="card-img-top image-style" src="images/church-community.jpeg" alt="Campus Community"/>
                <div className="card-body">
                  <h3 className="card-title">Campus Community</h3>
                  <p className="card-text">I'm a part of a local campus community.</p>
                </div>
              </Link>
          </div>
        </div>

        <div className="col-5 d-flex justify-content-center w-40">
          <div className="card">
            <Link to="/efam" style={{ textDecoration: 'none', color: 'inherit'}}>
              <img className="card-img-top image-style" src="images/online-church.jpeg" alt="Campus Community" />
              <div className="card-body">
                <h3 className="card-title">eFam</h3>
                <p className="card-text">I'm a part of a local campus community.</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

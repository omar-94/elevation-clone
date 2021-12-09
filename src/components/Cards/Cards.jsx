import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';

const cardStyle = {
  width: '100%',
}


export default function Cards() {
  return (
    <div className="container">
      <div className="row justify-content-around ">

        <div className="col-4 d-flex justify-content-center">
          <div class="card" style={cardStyle}>
              <Link to="/CampusCommunity" style={{ textDecoration: 'none', color: 'inherit'}}>
                <img className="card-img-top image-style" src="images/church-community.jpeg" alt="Campus Community"/>
                <div class="card-body">
                  <h3 className="card-title">Campus Community</h3>
                  <p class="card-text">I'm a part of a local campus community.</p>
                </div>
              </Link>
          </div>
        </div>

        <div className="col-4 d-flex justify-content-center w-40">
          <div class="card" style={cardStyle}>
            <img className="card-img-top image-style" src="images/online-church.jpeg" alt="Campus Community" />
            <div class="card-body">
              <h3 className="card-title">eFam</h3>
              <p class="card-text">I'm a part of a local campus community.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

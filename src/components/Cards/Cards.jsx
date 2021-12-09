import React from 'react';
import "./style.scss"

const imageStyle = {
  width: '18rem',
}

export default function Cards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div class="card" style={imageStyle}>
            <img className="card-img-top" src="images/church-community" alt="Campus Community" />
            <div class="card-body">
              <h3>Campus Community</h3>
              <p class="card-text">I'm a part of a local campus community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

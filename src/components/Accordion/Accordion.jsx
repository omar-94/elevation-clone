import React from 'react';
import "./style.scss";
import Data from '../../elevationData';

export default function AccordionMenu() {
  return (
    <div>

      <div className="container">
        <div className="row">

          <div className="col-4">
            <div className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Campus Community  
                  </button>
                </h3>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                      <option>
                        { 
                          Data
                          .map(Data => <li key={Data.id}>{Data.campusName}</li>) 
                        }
                      </option>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Demographic  
                  </button>
                </h3>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <ul style={{ listStyleType: 'none' }}>
                        { 
                          Data
                          .map(Data => <li key={Data.id}>{Data.demographic}</li>) 
                        }
                      </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        
          
          <div className="col-lg">
            <div className="results">
              <h2> Find an e group</h2> 

            </div>
          </div>

        </div>
      </div>
    
    </div>
  )
}

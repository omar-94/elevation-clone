import React from 'react';
import "./style.scss";
import Data from '../../elevationData';

export default function AccordionMenu() {
  return (
          <div className="col-4">
            <div className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Campus Community  
                  </button>
                </h3>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <ul className="accordion-body" style={{ listStyleType: 'none' }}>
                        { 
                          Data
                          .map(Data => <a href="/"><li key={Data.id} className='label'>{Data.campusName}</li></a>) 
                        }
                  </ul>
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
                        .map(Data => <button key={Data.id}>{Data.demographic}</button>) 
                      }
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
  )
}

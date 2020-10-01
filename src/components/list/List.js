import React from 'react';
import './List.css';

function List(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="text-right"><span></span></div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-footer text-right">
                Rafael
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
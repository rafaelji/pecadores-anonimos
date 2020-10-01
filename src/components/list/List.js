import React from 'react';
import './List.css';

function List(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="text-right">
                <div className="dropdown">
                  <button className="btn btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-grip-horizontal" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>    
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" href="#">
                      Reportar conteúdo inadequado
                    </button>
                  </div>
                </div>
              </div>
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
import React from 'react';
import List from '../list/List';
import './Solicitation.css';

function Solicitation(props) {
  return (
    <>
      <main>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="title">Pedidos feitos</h1>
              <h2 className="subtitle">Então, me invocareis, passareis a orar a mim, e eu vos ouvirei. Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração. Jr 29:12-13</h2>
            </div>
          </div>
        </div>
        <List></List>
      </main>
    </>
  );
}

export default Solicitation;
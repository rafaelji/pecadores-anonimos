import React, {useState, useEffect} from 'react';
import List from '../list/List';
import './Solicitation.css';
import GetSolicitation from '../../services/GetSolicitationsService';

function Solicitation(props) {
  const [solicitations, setSolicitations] = useState([]);

  useEffect(() => {
    async function getSolicitations() {
      try {
        const solicitationsList = await GetSolicitation.get();        
        setSolicitations(solicitationsList);
      } catch (error) {
        console.log(error);
      }
    }

    getSolicitations();
  },[]);

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
        <List list={solicitations}></List>
      </main>
    </>
  );
}

export default Solicitation;
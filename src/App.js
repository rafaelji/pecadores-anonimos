import React from 'react';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label for="name">Nome <span>(se o campo estive vazio será identificado como anônimo)</span></label>
                  <input className="form-control" id="name" />
                </div>
                <div className="form-check">
                  <input class="form-check-input" type="radio" name="type" id="ask" value="ask" checked />
                  <label class="form-check-label" for="ask">
                    Pedir
                  </label>
                </div>
                <div className="form-check">
                  <input class="form-check-input" type="radio" name="type" id="thank" value="thank" />
                  <label class="form-check-label" for="thank">
                    Agradecer
                  </label>
                </div>
                <div className="form-group">
                  <label for="description">Descrição</label>
                  <textarea class="form-control" id="description" rows="5"></textarea>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="use-terms" />
                  <label class="form-check-label" for="use-terms">
                    Entendo e concordo que meu pedido ou agradecimento será salvo e disponibilizado publicamente conforme identificado (com nome ou de forma anônima) no formulário acima e me responsabilizo pelo conteudo do mesmo.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                  <span role="img" arial-label="Mãos em posição de oração">&#x1F64F;</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Início <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pedidos</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Agradecimentos</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <h1>Pecadores Anônimos</h1>
              <h2>Orai sem cessar. 1° Tessalonicenses 5:17</h2>
            </div>
          </div>
        </div>
      </header>
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

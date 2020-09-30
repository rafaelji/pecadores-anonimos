import React, {useState} from 'react';
import './Home.css';

function Home(props) {
	const [type, setType] = useState('ask');
	const [description, setDescription] = useState('');

	const enableSend = () => (type === 'ask' || type === 'thank') && (description.trim().length > 6 && description.length < 255);

	return (
		<main>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<form>
							<div className="form-group">
								<label htmlFor="name">Nome <span className="name-hint">(se o campo estiver vazio será identificado como anônimo)</span></label>
								<input className="form-control" id="name" />
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="type" id="ask" value="ask" checked={type === 'ask'} onChange={e => setType(e.target.value)}/>
								<label className="form-check-label" htmlFor="ask">
									Eu gostaria de pedir
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="type" id="thank" value="thank" checked={type === 'thank'} onChange={e => setType(e.target.value)}/>
								<label className="form-check-label" htmlFor="thank">
									Eu gostaria de agradecer
								</label>
							</div>
							<div className="form-group mt-3">
								<label htmlFor="description">{type === 'ask' ? 'Pedido' : 'Agradecimento'}</label>
								<textarea className="form-control" id="description" rows="5" value={description} onChange={e => setDescription(e.target.value)} maxLength="255" required></textarea>
								<p className="text-right">{255 - description.length} caracteres restantes</p>
							</div>
							<div className="form-check mt-5">
								<input className="form-check-input" type="checkbox" value="" id="use-terms" />
								<label className="form-check-label" htmlFor="use-terms">
									Entendo e concordo que meu pedido ou agradecimento será salvo e disponibilizado publicamente (por e-mail ou no aqui na plataforma) conforme identificado (com nome ou de forma anônima) no formulário acima e me responsabilizo pelo conteúdo do mesmo.
								</label>
							</div>
							<button type="submit" className="btn btn-primary btn-lg btn-block mt-5 mb-5" disabled={!enableSend()}>Enviar</button>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
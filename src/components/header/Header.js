import React from 'react';
import './Header.css';

function Header(props) {
    return (
			<header className="text-center">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 p-0">
							<nav className="navbar navbar-expand-lg navbar-light bg-light">
								<a className="navbar-brand" href="#">
									<span role="img" arial-label="Mãos em posição de oração">&#x1F64F;</span>
								</a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>

								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav mr-auto">
										<li className="nav-item active">
										<a className="nav-link" href="#">Início</a>
										</li>
										<li className="nav-item">
										<a className="nav-link" href="#">Pedidos</a>
										</li>
										<li className="nav-item">
										<a className="nav-link" href="#">Agradecimentos</a>
										</li>
									</ul>
								</div>
							</nav>
							<h1 className="title">Pecadores Anônimos</h1>
							<h2 className="subtitle">Orai sem cessar. 1° Ts 5:17</h2>
						</div>
					</div>
				</div>
			</header>
    );

}

export default Header;
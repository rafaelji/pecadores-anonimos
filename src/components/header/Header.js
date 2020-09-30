import React from 'react';
import './Header.css';

function Header(props) {
    return (
			<header className="text-center">
				<div className="container-fluid">
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
										<a class="nav-link" href="#">Início</a>
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
							<h1 className="title">Pecadores Anônimos</h1>
							<h2 className="subtitle">Orai sem cessar. 1° Ts 5:17</h2>
						</div>
					</div>
				</div>
			</header>
    );

}

export default Header;
import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header(props) {
    return (
			<header className="text-center">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 p-0">
							<nav className="navbar navbar-expand-lg navbar-light bg-light">
								<Link className="navbar-brand" href="#">
									<span role="img" arial-label="Mãos em posição de oração">&#x1F64F;</span>
								</Link>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>

								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav mr-auto">
										<li className="nav-item active">
										  <Link className="nav-link" to="/">Início</Link>
										</li>
										<li className="nav-item">
										  <Link className="nav-link" to="/pedidos">Pedidos</Link>
										</li>
										<li className="nav-item">
										  <Link className="nav-link" to="/agradecimentos">Agradecimentos</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
    );

}

export default Header;
import React from 'react'
import Layout from '../src/components/Layout'
import HeadApp from '../src/components/HeadApp'
import '../src/styles/pages/Contacto.css'

const Contacto = () => {
	return (
		<>
			<HeadApp title="Contacto" />
			<Layout>
				<div>
					<div className="sec1-contacto">
						<div className="box-2">
							<h3>CONTACTO</h3>
							<div className="box-x" />
							<img src="assets/img/contacto/fondo.png" alt="" />
						</div>
					</div>
					<div className="sec2-contacto">
						<div className="redes">
							<div className="txt">
								<div className="icon">
									<a href="#">
										<i className="fab fa-instagram" />
									</a>
									<a href="#">
										<i className="fab fa-facebook" />
									</a>
									<a href="#">
										<i className="fab fa-whatsapp" />
									</a>
								</div>
								<p>@vinaki.arq</p>
								<p>+57 321 391 2131</p>
								<p>arte@vinakiarquitectos.com</p>
							</div>
							<div className="img">
								<img src="assets/img/contacto/linias.png" alt="" />
							</div>
						</div>
						<form action type="POST" className="formulario">
							<div className="two">
								<input type="text" placeholder="Nombre" required />
								<input type="text" placeholder="Apellido" required />
							</div>
							<div className="two">
								<input type="text" placeholder="Telefono" required />
								<input type="text" placeholder="Email" required />
							</div>
							<textarea name placeholder="Escribenos" defaultValue={''} />
							<div className="boton">
								<button type="submit">Enviar</button>
							</div>
						</form>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Contacto

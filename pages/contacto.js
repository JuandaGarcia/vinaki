import React, { useState } from 'react'
import Layout from '../src/components/Layout'
import HeadApp from '../src/components/HeadApp'
import '../src/styles/pages/Contacto.css'

const Contacto = () => {
	const [formData, setFormData] = useState({
		name: '',
		lastName: '',
		phone: '',
		email: '',
		message: '',
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		alert('se envio')
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

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
						<form onSubmit={handleSubmit} className="formulario">
							<div className="two">
								<input
									type="text"
									placeholder="Nombre"
									name="name"
									required
									value={formData.name}
									onChange={handleChange}
								/>
								<input
									type="text"
									placeholder="Apellido"
									name="lastName"
									required
									value={formData.lastName}
									onChange={handleChange}
								/>
							</div>
							<div className="two">
								<input
									type="text"
									placeholder="Telefono"
									name="phone"
									required
									value={formData.phone}
									onChange={handleChange}
								/>
								<input
									type="text"
									placeholder="Email"
									name="email"
									required
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<textarea
								name="message"
								placeholder="Escribenos"
								value={formData.message}
								onChange={handleChange}
							/>
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

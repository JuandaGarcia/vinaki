import React, { useState } from 'react'
import Layout from '../src/components/Layout'
import HeadApp from '../src/components/HeadApp'
import Swal from 'sweetalert2'
import '../src/styles/pages/Contacto.css'

const Contacto = () => {
	const [formData, setFormData] = useState({
		name: '',
		lastName: '',
		phone: '',
		email: '',
		message: '',
	})

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		let myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

		let urlencoded = new URLSearchParams()
		urlencoded.append('name', formData.name)
		urlencoded.append('lastName', formData.lastName)
		urlencoded.append('phone', formData.phone)
		urlencoded.append('email', formData.email)
		urlencoded.append('message', formData.message)

		let requestOptions = {
			mode: 'no-cors',
			method: 'POST',
			headers: myHeaders,
			body: urlencoded,
			redirect: 'follow',
		}

		try {
			await fetch(
				`https://servicios.juandagarcia.com/vinaki-mail.php`,
				requestOptions
			).then(() => {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'El mensaje se envió con éxito',
					showConfirmButton: false,
				})
			})
		} catch (error) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Ocurrió un error, por favor inténtalo mas tarde',
				showConfirmButton: false,
			})
		}

		setFormData({
			name: '',
			lastName: '',
			phone: '',
			email: '',
			message: '',
		})
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
							<img src="assets/img/contacto/fondo.jpg" alt="" />
						</div>
					</div>
					<div className="sec2-contacto">
						<div className="redes">
							<div className="txt">
								<div className="redes">
									<a
										href={process.env.INSTAGRAM}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="footer__red"
											src="/assets/icons/instagram.svg"
											alt="Instagram"
										/>
									</a>
									<a
										href={process.env.FACEBOOK}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="footer__red"
											src="/assets/icons/facebook.svg"
											alt="Facebook"
										/>
									</a>
									<a
										href={process.env.WHATSAPP}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="footer__red"
											src="/assets/icons/whatsapp.svg"
											alt="Whatsapp"
										/>
									</a>
									<a
										href="mailto: arte@vinakiarquitectos.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="footer__red"
											src="/assets/icons/email.svg"
											alt="Whatsapp"
										/>
									</a>
								</div>
								<p>@vinakiarquitectos</p>
								<p>+57 318 391-2131</p>
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
									type="number"
									placeholder="Teléfono"
									name="phone"
									required
									value={formData.phone}
									onChange={handleChange}
								/>
								<input
									type="email"
									placeholder="Email"
									name="email"
									required
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<textarea
								name="message"
								placeholder="Escríbenos"
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

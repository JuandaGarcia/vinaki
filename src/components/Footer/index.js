import Link from 'next/link'
import './styles.css'

const Footer = () => {
	return (
		<footer>
			<div className="divList">
				<Link href="/">
					<a>Inicio</a>
				</Link>
				<Link href="/autores">
					<a>Autores</a>
				</Link>
				<Link href="/obras">
					<a>Obras</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
				<Link href="/contacto">
					<a>Contacto</a>
				</Link>
			</div>
			<div className="divRedes">
				<div className="redes">
					<i className="fab fa-instagram" />
					<i className="fab fa-facebook" />
					<i className="fab fa-whatsapp" />
				</div>
				<p>arte@vinakiarquitectos.com</p>
				<p>3015376543 - 3606437</p>
			</div>
			<div className="divDerechos">
				<p>2020, Desarrollado por 99andpartners</p>
				<img src="assets/img/footer/v.png" alt="" />
			</div>
		</footer>
	)
}

export default Footer

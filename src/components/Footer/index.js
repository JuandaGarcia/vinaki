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
				<Link href="/obras/1">
					<a>Obras</a>
				</Link>
				<Link href="/blog/1">
					<a>Blog</a>
				</Link>
				<Link href="/contacto">
					<a>Contacto</a>
				</Link>
			</div>
			<div className="divRedes">
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
				</div>

				<a className="link__email" href="mailto: arte@vinakiarquitectos.com">
					arte@vinakiarquitectos.com
				</a>
				<p>+57 318 391-2131 - (8) 8689702</p>
			</div>
			<div className="divDerechos">
				<p className="developer">
					2020, Desarrollado por{' '}
					<a
						href="http://www.99andpartners.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						99andpartners
					</a>
				</p>
				<img src="/assets/img/footer/v.png" alt="Vinaki" />
			</div>
		</footer>
	)
}

export default Footer

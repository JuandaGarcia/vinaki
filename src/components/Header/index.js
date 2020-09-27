import React from 'react'
import Link from 'next/link'
import ActiveLink from '../ActiveLink'
import './styles.css'

const Header = ({ logoWhite }) => {
	return (
		<header className="head">
			<div className="menu">
				<Link href="/">
					<a className="logo">
						<img
							src={`assets/img/menu/logo0${logoWhite ? 1 : 2}.png`}
							alt="Logo"
						/>
					</a>
				</Link>
				<nav className="nav">
					<ActiveLink href="/" id="active">
						Inicio
					</ActiveLink>
					<ActiveLink href="/autores">Autores</ActiveLink>
					<ActiveLink href="/obras">Obras</ActiveLink>
					<ActiveLink href="/blog">Blog</ActiveLink>
					<ActiveLink href="/contacto">Contacto</ActiveLink>
				</nav>
			</div>
		</header>
	)
}

export default Header

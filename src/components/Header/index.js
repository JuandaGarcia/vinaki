import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import ActiveLink from '../ActiveLink'
import { Context } from '../../../pages/_app'
import './styles.css'
import './burger-button.css'

const Header = ({ logoWhite }) => {
	const [openMenu, setOpenMenu] = useState(false)
	const { clientLoad, isMobile } = useContext(Context)

	useEffect(() => {
		if (openMenu) {
			window.scrollTo(0, 0)
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'initial'
		}
	}, [openMenu])

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
				<nav className={`nav ${openMenu ? 'active' : ''}`}>
					<ActiveLink href="/" id="active">
						Inicio
					</ActiveLink>
					<ActiveLink href="/autores">Autores</ActiveLink>
					<ActiveLink href="/obras">Obras</ActiveLink>
					<ActiveLink href="/blog">Blog</ActiveLink>
					<ActiveLink href="/contacto">Contacto</ActiveLink>
				</nav>
				{clientLoad && isMobile && (
					<button
						id="hamburger-icon"
						className={openMenu ? 'active' : ''}
						onClick={() => setOpenMenu(!openMenu)}
					>
						<div className="line line-1"></div>
						<div className="line line-2"></div>
						<div className="line line-3"></div>
					</button>
				)}
			</div>
		</header>
	)
}

export default Header

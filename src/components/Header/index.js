import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import ActiveLink from '../ActiveLink'
import { Context } from '../../../pages/_app'
import './styles.css'
import './burger-button.css'

const Header = ({ logoWhite, isBlog, isObra }) => {
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
				{clientLoad && isMobile && (isBlog || isObra) && (
					<Link href={isBlog ? '/blog/1' : '/obras/1'}>
						<a className="arrow">
							<img src={`/assets/img/global/arrow.png`} alt="Logo" />
						</a>
					</Link>
				)}
				<Link href="/">
					<a className="logo">
						<img
							src={`/assets/img/menu/logo0${logoWhite ? 1 : 2}.png`}
							alt="Logo"
						/>
					</a>
				</Link>
				<nav className={`nav ${openMenu ? 'active' : ''}`}>
					<ActiveLink
						onClick={() => setOpenMenu(!openMenu)}
						href="/"
						id="active"
					>
						Inicio
					</ActiveLink>
					<ActiveLink onClick={() => setOpenMenu(!openMenu)} href="/autores">
						Autores
					</ActiveLink>
					<ActiveLink onClick={() => setOpenMenu(!openMenu)} href="/obras/1">
						Obras
					</ActiveLink>
					<ActiveLink onClick={() => setOpenMenu(!openMenu)} href="/blog/1">
						Blog
					</ActiveLink>
					<ActiveLink onClick={() => setOpenMenu(!openMenu)} href="/contacto">
						Contacto
					</ActiveLink>
					{clientLoad && isMobile && (
						<div className="nav__redes">
							<a
								className="red"
								href={process.env.INSTAGRAM}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="nav__redes__icon"
									src="/assets/icons/instagram.svg"
									alt="Instagram"
								/>
							</a>
							<a
								className="red"
								href={process.env.FACEBOOK}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="nav__redes__icon"
									src="/assets/icons/facebook.svg"
									alt="Facebook"
								/>
							</a>
							<a
								className="red"
								href={process.env.WHATSAPP}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="nav__redes__icon"
									src="/assets/icons/whatsapp.svg"
									alt="Whatsapp"
								/>
							</a>
						</div>
					)}
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

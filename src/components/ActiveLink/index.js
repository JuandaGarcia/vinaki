import { useRouter } from 'next/router'

const ActiveLink = ({ children, href }) => {
	const router = useRouter()
	const blueBackground = router.pathname === href ? 'active' : ''

	const handleClick = (e) => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a href={href} onClick={handleClick} className={blueBackground}>
			{children}
		</a>
	)
}

export default ActiveLink

import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const index = ({ children, logoWhite }) => {
	return (
		<>
			<Header logoWhite={logoWhite} />
			{children}
			<Footer />
		</>
	)
}

export default index

import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const index = ({ children, logoWhite, isBlog, isObra }) => {
	return (
		<>
			<Header isBlog={isBlog} isObra={isObra} logoWhite={logoWhite} />
			{children}
			<Footer />
		</>
	)
}

export default index

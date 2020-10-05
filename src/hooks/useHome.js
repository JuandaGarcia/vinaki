import React from 'react'

const useHome = () => {
	const formatDate = (dateString) => {
		const date = new Date(dateString)
		const month = [
			'Enero',
			'Febrero',
			'Marzo',
			'Abril',
			'Mayo',
			'Junio',
			'Julio',
			'Agosto',
			'Septiembre',
			'Octubre',
			'Noviembre',
			'Diciembre',
		][date.getMonth()]
		const str = `${month} ${date.getDate()}, ${date.getFullYear()}`
		return str
	}
	return { formatDate }
}

export default useHome

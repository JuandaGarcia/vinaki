import { createContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import '../src/styles/globals.css'

export const Context = createContext()

function MyApp({ Component, pageProps }) {
	const [clientLoad, setClientLoad] = useState(false)
	const [data, setData] = useState([])
	const isMobile = useMediaQuery({
		query: '(max-width: 1024px)',
	})

	useEffect(() => {
		setClientLoad(true)
	}, [])

	return (
		<Context.Provider value={{ clientLoad, isMobile, data, setData }}>
			<Component {...pageProps} />
		</Context.Provider>
	)
}

export default MyApp

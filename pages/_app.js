import { createContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import '../src/styles/globals.css'
import dynamic from 'next/dynamic'
import 'nprogress/nprogress.css'

const TopProgressBar = dynamic(
	() => {
		return import('../src/components/TopProgressBar')
	},
	{ ssr: false }
)

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
			<TopProgressBar />
			<Component {...pageProps} />
		</Context.Provider>
	)
}

export default MyApp

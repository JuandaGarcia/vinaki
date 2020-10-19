import { useContext } from 'react'
import { Context } from '../../../pages/_app'
import Head from 'next/head'

const HeadApp = ({ title, metaDescription }) => {
	const { clientLoad } = useContext(Context)
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<link rel="icon" href="/assets/icons/icon.svg" />
				<title>Vinaki{title ? ` - ${title}` : ''}</title>
				<meta name="description" content={metaDescription} />
				{clientLoad && window.location.host === process.env.DOMAIN ? (
					<meta name="robots" content="index,follow" />
				) : (
					<meta name="robots" content="noindex,nofollow" />
				)}
			</Head>
		</>
	)
}

export default HeadApp

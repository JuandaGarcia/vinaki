import Head from 'next/head'

const HeadApp = ({ title, metaDescription }) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<link rel="icon" href="/assets/img/menu/logo02.png" />
				<title>Vinaki{title ? ` - ${title}` : ''}</title>
				<meta name="description" content={metaDescription} />
			</Head>
		</>
	)
}

export default HeadApp

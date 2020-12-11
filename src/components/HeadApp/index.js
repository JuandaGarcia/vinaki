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
				<script
					dangerouslySetInnerHTML={{
						__html: `!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window,document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						 fbq('init', '3012825578940781');
						fbq('track', 'PageView');`,
					}}
				></script>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<img height="1" width="1"
						src="https://www.facebook.com/tr?id=3012825578940781&ev=PageView
						&noscript=1"/>`,
					}}
				></noscript>
			</Head>
		</>
	)
}

export default HeadApp

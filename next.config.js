const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = withCSS(
	withSass({
		async redirects() {
			return [
				{
					source: '/blog',
					destination: '/blog/1',
					permanent: true,
				},
				{
					source: '/obras',
					destination: '/obras/1',
					permanent: true,
				},
			]
		},
		env: {
			API_URL: 'http://vinaki.juandagarcia.com',
			INSTAGRAM: 'http://instagram.com/vinakiarquitectos',
			FACEBOOK: 'http://facebook.com/',
			WHATSAPP: 'http://wa.me/573015376543',
			DOMAIN: 'vinakiarquitectos.com',
		},
	})
)

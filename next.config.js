const withCSS = require('@zeit/next-css')
module.exports = withCSS({
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
	},
})

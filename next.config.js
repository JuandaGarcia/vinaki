const withCSS = require('@zeit/next-css')
module.exports = withCSS({
	async redirects() {
		return [
			{
				source: '/blog',
				destination: '/blog/1',
				permanent: true,
			},
		]
	},
})

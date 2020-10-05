import React from 'react'
import Layout from '../../src/components/Layout'
import { useRouter } from 'next/router'

const Blog = () => {
	const { query } = useRouter()
	return (
		<Layout>
			<div>{query.id}</div>
		</Layout>
	)
}

export default Blog

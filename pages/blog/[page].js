import React, { useEffect, useState, useContext } from 'react'
import Layout from '../../src/components/Layout'
import HeadApp from '../../src/components/HeadApp'
import Link from 'next/link'
import { Context } from '../_app'
import { useRouter } from 'next/router'
import PostListItem from '../../src/components/PostListItem'
import '../../src/styles/pages/Blog.css'

const Blog = ({ url }) => {
	const { query } = useRouter()
	const { isMobile, clientLoad } = useContext(Context)
	const [dataPosts, setDataPost] = useState([])
	const [loading, setLoading] = useState(true)
	const [errorPosts, setErrorPosts] = useState(null)
	const [totalPosts, setTotalPosts] = useState(0)
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		;(async () => {
			try {
				const res = await fetch(
					`${url}/wp-json/wp/v2/posts?per_page=5&_embed&page=1asd`
				)
				setTotalPosts(res.headers.get('X-WP-Total'))
				setTotalPages(res.headers.get('X-WP-TotalPages'))
				const data = await res.json()
				if (data.code === 'rest_invalid_param') {
					console.log('entro al error')
					throw new Error({ error: '400' })
				}
				setDataPost(data)
				setLoading(false)
			} catch (error) {
				setErrorPosts(error)
				setLoading(false)
			}
		})()
	}, [])

	return (
		<>
			<HeadApp title="Blog" />
			<Layout>
				<div>
					<div className="sec1-blog">
						<div className="box-1">
							<p>BLOG</p>
						</div>
						<div className="box-2">
							<div className="box-x" />
							<img src="/assets/img/obras/recurso1.png" alt="" />
						</div>
					</div>
					<div className="blogContainer">
						{loading ? (
							<div className="content-blog__loading">
								Cargando datos del blog ...
							</div>
						) : (
							<>
								{errorPosts ? (
									<div className="blog-error">
										<p>Ocurrió un error al traer la información del blog</p>
									</div>
								) : (
									<>
										{dataPosts.map((post, index) => {
											return <PostListItem key={post.id} post={post} />
										})}
										<div className="blogContainer__buttons">
											{query.page !== '1' && (
												<Link href="/blog/3">
													<a>Anterior</a>
												</Link>
											)}
											<Link href="/blog/2">
												<a>Siguiente</a>
											</Link>
										</div>
									</>
								)}
							</>
						)}
					</div>
				</div>
			</Layout>
		</>
	)
}

export async function getServerSideProps() {
	return {
		props: {
			url: process.env.API_URL,
		},
	}
}

export default Blog

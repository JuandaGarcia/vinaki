import React, { useEffect, useState, useContext } from 'react'
import Layout from '../../../src/components/Layout'
import usePost from '../../../src/hooks/usePost'
import Link from 'next/link'
import HeadApp from '../../../src/components/HeadApp'
import PostListItem from '../../../src/components/PostListItem'
import { Context } from '../../_app'
import '../../../src/styles/pages/individualBlog.module.css'

const Blog = ({ data, error }) => {
	const { formatDate } = usePost()
	const [dataPosts, setDataPosts] = useState([])
	const [loading, setLoading] = useState(true)
	const [errorPost, setErrorPost] = useState(null)
	const { isMobile, clientLoad } = useContext(Context)
	useEffect(() => {
		;(async () => {
			try {
				const res = await fetch(
					`${process.env.API_URL}/wp-json/wp/v2/posts?per_page=3&_embed&categories=2`
				)
				const data = await res.json()
				setDataPosts(data)
				setLoading(false)
			} catch (error) {
				setLoading(false)
				setErrorPost(error)
			}
		})()
	}, [])
	return (
		<>
			<HeadApp title={data[0].title.rendered} />
			<Layout isBlog>
				{error ? (
					<div className="individualBlog__error">
						<p className="individualBlog__error__p">
							Ocurrió un error al traer la información del blog
						</p>
						<br />
						<Link href="/">
							<a className="individualBlog__404__link">Ir al Inicio</a>
						</Link>
					</div>
				) : (
					<>
						{data.length ? (
							<>
								<div className="individualBlog">
									<div className="individualBlog__title">
										<h1 className="individualBlog__title__h1">
											{data[0].title.rendered}
										</h1>
										<br />
										<p>{formatDate(data[0].date)}</p>
									</div>
									{data[0]._embedded['wp:featuredmedia'] ? (
										<img
											className="individualBlog__img"
											src={data[0]._embedded['wp:featuredmedia'][0].source_url}
											alt={data[0].title.rendered}
										/>
									) : (
										<img
											className="individualBlog__img"
											src="/assets/img/global/not-found.jpg"
											alt={data[0].title.rendered}
										/>
									)}
									<div
										className="individualBlog__text"
										dangerouslySetInnerHTML={{
											__html: data[0].content.rendered,
										}}
									></div>
									<div className="individualBlog__relacionados">
										<h3 className="individualBlog__title__h3">Relacionados</h3>
										<br />
										<div className="individualBlog__relacionados__container">
											{loading ? (
												<div className="loadingSection">
													<p>Loading</p>
												</div>
											) : (
												<>
													{errorPost ? (
														<div className="blog-error">
															<p>
																Ocurrió un error al traer la información de los
																relacionados
															</p>
														</div>
													) : (
														<>
															{dataPosts.map((post, index) => {
																if (clientLoad && isMobile && index === 2) {
																	return null
																}
																return (
																	<PostListItem key={post.id} post={post} />
																)
															})}
														</>
													)}
												</>
											)}
										</div>
									</div>
								</div>
							</>
						) : (
							<div className="individualBlog__404">
								<p className="individualBlog__404__title">404</p>
								<p>Página no encontrada</p>
								<br />
								<Link href="/">
									<a className="individualBlog__404__link">Ir al Inicio</a>
								</Link>
							</div>
						)}
					</>
				)}
			</Layout>
		</>
	)
}

export async function getServerSideProps({ params }) {
	try {
		const res = await fetch(
			`${process.env.API_URL}/wp-json/wp/v2/posts?slug=${params.slug}&_embed&categories=2`
		)
		const data = await res.json()
		return {
			props: { data },
		}
	} catch {
		return {
			props: { error: 404 },
		}
	}
}

export default Blog

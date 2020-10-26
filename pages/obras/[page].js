import React, { useEffect, useState } from 'react'
import Layout from '../../src/components/Layout'
import HeadApp from '../../src/components/HeadApp'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '../../src/styles/pages/Obras.css'

const obras = () => {
	const { query } = useRouter()
	const [dataPosts, setDataPost] = useState([])
	const [loading, setLoading] = useState(true)
	const [errorPosts, setErrorPosts] = useState(null)
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		if (query.page) {
			;(async () => {
				try {
					const res = await fetch(
						`${process.env.API_URL}/wp-json/wp/v2/posts?per_page=4&_embed&page=${query.page}&categories=4&orderby=modified`
					)
					setErrorPosts(null)
					setTotalPages(res.headers.get('X-WP-TotalPages'))
					const data = await res.json()
					if (
						data.code === 'rest_invalid_param' ||
						data.code === 'rest_post_invalid_page_number'
					) {
						throw new Error(data.code)
					}
					setDataPost(data)
					setLoading(false)
				} catch (error) {
					setErrorPosts(error)
					setLoading(false)
				}
			})()
		}
	}, [query.page])

	return (
		<>
			<HeadApp title="Obras" />
			<Layout>
				<div className="obrasPage__container">
					<div className="sec1-obras">
						<div className="box-1">
							<p>OBRAS</p>
						</div>
						<div className="box-2">
							<div className="box-x" />
							<img loading="lazy" src="/assets/img/obras/recurso1.png" alt="" />
						</div>
					</div>
					<div className="media">
						{loading ? (
							<div className="media__loading">Cargando datos ...</div>
						) : (
							<>
								{errorPosts && query.page !== undefined ? (
									<>
										{errorPosts.message === 'rest_invalid_param' ||
										errorPosts.message === 'rest_post_invalid_page_number' ? (
											<div className="media__404 blogPage">
												<p className="media__404__title">404</p>
												<p>Página no encontrada</p>
												<br />
												<Link href="/">
													<a className="media__404__link">Ir al Inicio</a>
												</Link>
											</div>
										) : (
											<div className="blog-error">
												<p>Ocurrió un error al traer la información.</p>
											</div>
										)}
									</>
								) : (
									<>
										{dataPosts.map((obra) => {
											return (
												<Link key={obra.id} href={`/obras/post/${obra.slug}`}>
													<figure className="snip0015 large">
														{obra._embedded['wp:featuredmedia'] ? (
															<img
																loading="lazy"
																className="blog__image"
																src={
																	obra._embedded['wp:featuredmedia'][0]
																		.source_url
																}
																alt={obra.title.rendered}
															/>
														) : (
															<img
																loading="lazy"
																className="blog__image"
																src="/assets/img/global/not-found.jpg"
																alt="Blog"
															/>
														)}
														<figcaption>
															<h2>{obra.title.rendered}</h2>
															<p>Ver más</p>
															<a href="#" />
														</figcaption>
													</figure>
												</Link>
											)
										})}
									</>
								)}
								<div className="media__buttons">
									{!errorPosts && (
										<>
											{query.page !== '1' && (
												<Link href={`/obras/${parseInt(query.page) - 1}`}>
													<a
														className="media__buttons__button -black"
														onClick={() => setLoading(true)}
													>
														Anterior
													</a>
												</Link>
											)}
											{totalPages !== query.page && (
												<Link href={`/obras/${parseInt(query.page) + 1}`}>
													<a
														className="media__buttons__button -yellow"
														onClick={() => setLoading(true)}
													>
														Siguiente
													</a>
												</Link>
											)}
										</>
									)}
								</div>
							</>
						)}
					</div>
				</div>
			</Layout>
		</>
	)
}

export default obras

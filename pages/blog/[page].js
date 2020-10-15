import React, { useEffect, useState, useContext } from 'react'
import Layout from '../../src/components/Layout'
import HeadApp from '../../src/components/HeadApp'
import Link from 'next/link'
import { Context } from '../_app'
import { useRouter } from 'next/router'
import PostListItem from '../../src/components/PostListItem'
import '../../src/styles/pages/Blog.css'

const Blog = ({ errorPosts, dataPosts, totalPages }) => {
	const { query } = useRouter()
	const { isMobile, clientLoad } = useContext(Context)

	return (
		<>
			<HeadApp title="Blog" />
			<Layout>
				<div className="blogsPage">
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
						<>
							{errorPosts ? (
								<>
									{errorPosts.message === 'rest_invalid_param' ||
									errorPosts.message === 'rest_post_invalid_page_number' ? (
										<div className="blogContainer__404 blogPage">
											<p className="blogContainer__404__title">404</p>
											<p>Página no encontrada</p>
											<br />
											<Link href="/">
												<a className="blogContainer__404__link">Ir al Inicio</a>
											</Link>
										</div>
									) : (
										<div className="blog-error">
											<p>Ocurrió un error al traer la información del blog</p>
										</div>
									)}
								</>
							) : (
								<>
									{dataPosts.map((post) => {
										return <PostListItem key={post.id} post={post} />
									})}
									<div className="blogContainer__buttons">
										{query.page !== '1' && (
											<Link href={`/blog/${parseInt(query.page) - 1}`}>
												<a className="blogContainer__buttons__button -black">
													Anterior
												</a>
											</Link>
										)}
										{totalPages !== query.page && (
											<Link href={`/blog/${parseInt(query.page) + 1}`}>
												<a className="blogContainer__buttons__button -yellow">
													Siguiente
												</a>
											</Link>
										)}
									</div>
								</>
							)}
						</>
					</div>
				</div>
			</Layout>
		</>
	)
}

export async function getServerSideProps({ params }) {
	try {
		const res = await fetch(
			`${process.env.API_URL}/wp-json/wp/v2/posts?per_page=5&_embed&page=${params.page}&categories=2`
		)
		const data = await res.json()
		if (
			data.code === 'rest_invalid_param' ||
			data.code === 'rest_post_invalid_page_number'
		) {
			throw new Error(data.code)
		}
		return {
			props: {
				dataPosts: data,
				totalPages: res.headers.get('X-WP-TotalPages'),
			},
		}
	} catch (error) {
		return {
			props: { errorPosts: error },
		}
	}
}

export default Blog

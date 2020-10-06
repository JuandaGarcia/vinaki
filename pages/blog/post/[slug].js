import React from 'react'
import Layout from '../../../src/components/Layout'
import usePost from '../../../src/hooks/usePost'
import Link from 'next/link'
import HeadApp from '../../../src/components/HeadApp'
import { useRouter } from 'next/router'
import '../../../src/styles/pages/individualBlog.module.css'

const Blog = ({ data, error }) => {
	const router = useRouter()
	const { formatDate } = usePost()
	return (
		<>
			<HeadApp title={data[0].title.rendered} />
			<Layout>
				{error ? (
					<div className="inividualBlog__error">
						<p className="inividualBlog__error__p">
							Ocurrió un error al traer la información del blog
						</p>
						<br />
						<Link href="/">
							<a className="inividualBlog__404__link">Ir al Inicio</a>
						</Link>
					</div>
				) : (
					<>
						{data.length ? (
							<>
								<div className="inividualBlog">
									<div className="inividualBlog__title">
										<h1 className="inividualBlog__title__h1">
											{data[0].title.rendered}
										</h1>
										<br />
										<p>{formatDate(data[0].date)}</p>
									</div>
									{data[0]._embedded['wp:featuredmedia'] ? (
										<img
											className="inividualBlog__img"
											src={data[0]._embedded['wp:featuredmedia'][0].source_url}
											alt={data[0].title.rendered}
										/>
									) : (
										<img
											className="inividualBlog__img"
											src="/assets/img/global/not-found.jpg"
											alt={data[0].title.rendered}
										/>
									)}
									<div
										className="inividualBlog__text"
										dangerouslySetInnerHTML={{
											__html: data[0].content.rendered,
										}}
									></div>
								</div>
							</>
						) : (
							<div className="inividualBlog__404">
								<p className="inividualBlog__404__title">404</p>
								<p>Página no encontrada</p>
								<br />
								<Link href="/">
									<a className="inividualBlog__404__link">Ir al Inicio</a>
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
			`${process.env.API_URL}/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
		)
		const data = await res.json()
		console.log(data)
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

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const index = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		;(async () => {
			try {
				const res = await fetch(
					`${process.env.API_URL}/wp-json/wp/v2/posts?per_page=2&_embed&categories=4&orderby=modified`
				)
				const parseData = await res.json()
				if (data.code === 'rest_no_route') {
					throw new Error({ error: '404' })
				}
				setData(parseData)
				setLoading(false)
			} catch (error) {
				setError(error)
				setLoading(false)
			}
		})()
	}, [])

	return (
		<section className="sec2">
			<div className="title">
				<h3>
					Últimos proyectos{' '}
					<Link href="/obras/1">
						<a>Ver todos</a>
					</Link>
				</h3>
			</div>
			<div className="proyectos">
				{loading ? (
					<div className="content-blog__loading">
						Cargando datos del blog ...
					</div>
				) : (
					<>
						{error ? (
							<div className="blog-error">
								<p>Ocurrió un error al traer la información.</p>
							</div>
						) : (
							<>
								{data.map((project) => {
									return (
										<div key={project.id} className="caja">
											{project._embedded['wp:featuredmedia'] ? (
												<img
													src={
														project._embedded['wp:featuredmedia'][0].source_url
													}
													alt={project.title.rendered}
												/>
											) : (
												<img
													src="/assets/img/global/not-found.jpg"
													alt={project.title.rendered}
												/>
											)}
											<h2 className="titulo">{project.title.rendered}</h2>
											<p>Elaborado en:</p>
											<p>Autores: </p>
											<br />
											<div
												dangerouslySetInnerHTML={{
													__html: project.excerpt.rendered,
												}}
											></div>
											<br />
											<Link href={`/obras/post/${project.slug}`}>
												<a>Ver proyecto completo</a>
											</Link>
										</div>
									)
								})}
							</>
						)}
					</>
				)}
			</div>
		</section>
	)
}

export default index

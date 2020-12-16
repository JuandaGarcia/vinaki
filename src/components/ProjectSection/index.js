import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { Context } from '../../../pages/_app'

const index = ({ data, error, loading }) => {
	return (
		<>
			{loading ? (
				<div className="content-blog__loading">Cargando datos...</div>
			) : (
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
											<br />
											<div
												dangerouslySetInnerHTML={{
													__html: project.excerpt.rendered,
												}}
											></div>
											<br />
											<Link href={`/obras/post/${project.slug.toString()}`}>
												<a>Ver proyecto completo</a>
											</Link>
										</div>
									)
								})}
							</>
						)}
					</div>
				</section>
			)}
		</>
	)
}

export default index

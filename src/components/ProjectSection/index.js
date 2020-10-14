import React from 'react'
import Link from 'next/link'

const index = ({ dataObras, error }) => {
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
				{error ? (
					<div className="blog-error">
						<p>Ocurrió un error al traer la información.</p>
					</div>
				) : (
					<>
						{dataObras.map((project) => {
							return (
								<div key={project.id} className="caja">
									{project._embedded['wp:featuredmedia'] ? (
										<img
											src={project._embedded['wp:featuredmedia'][0].source_url}
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
			</div>
		</section>
	)
}

export default index

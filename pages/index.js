import { useContext } from 'react'
import Link from 'next/link'
import Layout from '../src/components/Layout'
import HeadApp from '../src/components/HeadApp'
import { Context } from './_app'
import usePost from '../src/hooks/usePost'
import '../src/styles/pages/Home.css'

const Home = ({ data, error }) => {
	const { isMobile, clientLoad } = useContext(Context)
	const { formatDate } = usePost()
	return (
		<>
			<HeadApp />
			<Layout>
				{clientLoad && isMobile ? (
					<div className="sec1-mobile">
						<div className="sec1-mobile__container">
							<div className="sec1-mobile__container__box" />
							<p className="sec1-mobile__container__p">
								UNA HUELLA VERDE EN CADA ESPACIO CONSTRUIDO
							</p>
						</div>
					</div>
				) : (
					<div className="sec1">
						<div className="box-1">
							<p>UNA</p>
							<p>HUELLA</p>
							<p>VERDE</p>
							<p>EN CADA</p>
							<p>ESPACIO</p>
							<p>CONSTRUIDO</p>
						</div>
						<div className="box-2">
							<div className="box-x" />
							<img src="assets/img/home/foto1.jpg" alt="" />
							<div className="box-y" />
						</div>
					</div>
				)}
				<div className="sec2">
					<div className="title">
						<h3>
							Últimos proyectos{' '}
							<Link href="/obras">
								<a>Ver todos</a>
							</Link>
						</h3>
					</div>
					<div className="proyectos">
						<div className="caja">
							<img src="assets/img/home/foto2.png" alt="" />
							<h2 className="titulo">Nombre del proyecto</h2>
							<p>Elaborado en:</p>
							<p>Autores: </p>
							<p className="text2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								inventore non consequuntur delectus porro optio, soluta ratione,
								perferendis, consectetur ipsum pariatur nobis at odit molestias
								aliquid, modi ducimus dolorum? Quasi!
							</p>
							<Link href="/">
								<a>Ver proyecto completo</a>
							</Link>
						</div>
						<div className="caja">
							<img src="assets/img/home/foto3.jpg" alt="" />
							<h2 className="titulo">Nombre del proyecto</h2>
							<p>Elaborado en:</p>
							<p>Autores: </p>
							<p className="text2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
								inventore non consequuntur delectus porro optio, soluta ratione,
								perferendis, consectetur ipsum pariatur nobis at odit molestias
								aliquid, modi ducimus dolorum? Quasi!
							</p>
							<Link href="/">
								<a>Ver proyecto completo</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="sec3">
					<div className="box-1">
						<div className="cont">
							<img src="assets/img/home/recurso1_Mesa_de_rabajo1.png" alt="" />
						</div>
						<div className="cont-2">
							<h2>Lorem ipsum</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Praesentium cupiditate et sapiente, ipsum ratione laudantium
								ducimus quia aperiam nam qui
							</p>
							<p>Lorem ipsum dolor, sit amet consectetur</p>
						</div>
					</div>
					<div className="box-2">
						<img src="assets/img/home/foto2.png" alt="" id="video" />
						<img
							src="assets/img/home/recurso2_Mesadetrabajo1.png"
							alt=""
							id="mesa"
						/>
					</div>
				</div>
				<div className="sec4">
					<img src="assets/img/home/foto4.jpg" alt="" />
					<div id="aut">
						<div className="autores">
							<h2>Autores</h2>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Tempore sunt sint quaerat. Nesciunt numquam perferendis,
								praesentium, non nisi velit tenetur.
							</p>
							<Link href="/autores">
								<a>Conocer más</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="sec5">
					<div className="title">
						<h3>
							Blog{' '}
							<Link href="/blog">
								<a>Ver todos</a>
							</Link>
						</h3>
					</div>
					<div className="content-blog">
						{error ? (
							<div className="blog-error">
								<p>Ocurrió un error al traer la información del blog</p>
							</div>
						) : (
							<>
								{data.map((post, index) => {
									if (clientLoad && !isMobile && index === 3) {
										return null
									}
									return (
										<Link
											key={post.id}
											href={'/blog/post/[id]'}
											as={`/blog/post/${post.slug}`}
										>
											<a>
												<div className="blog">
													<div className="imagen">
														{post._embedded['wp:featuredmedia'] ? (
															<img
																className="blog__image"
																src={
																	post._embedded['wp:featuredmedia'][0]
																		.source_url
																}
																alt={post.title.rendered}
															/>
														) : (
															<img
																className="blog__image"
																src="/assets/img/global/not-found.jpg"
																alt="Blog"
															/>
														)}
													</div>
													<div className="fecha">
														<p>{formatDate(post.date)}</p>
													</div>
													<div className="texto">
														<p>
															Lorem ipsum dolor, sit amet consectetur,
															adipisicing elit. Ipsum ullam maiores natus quos
															dicta est, modi, molestias placeat voluptatibus
															nihil.
														</p>
													</div>
												</div>
											</a>
										</Link>
									)
								})}
							</>
						)}
					</div>
				</div>
				<div className="sec6">
					<h3>Siguenos en Instagram</h3>
					<p>
						<i className="fab fa-instagram" /> @vinakiarquitectos
					</p>
					<div className="feed">
						<img src="/assets/img/home/instagram01.png" alt="" />
						<img src="/assets/img/home/instagram02.png" alt="" />
						<img src="/assets/img/home/instagram03.png" alt="" />
						<img src="/assets/img/home/instagram04.png" alt="" />
						<img src="/assets/img/home/instagram05.png" alt="" />
					</div>
				</div>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	try {
		const res = await fetch(
			`${process.env.API_URL}/wp-json/wp/v2/posts?per_page=4&_embed`
		)
		console.log(res)
		const data = await res.json()
		if (data.code === 'rest_no_route') {
			throw new Error({ error: '404' })
		}
		return {
			props: { data },
		}
	} catch {
		return {
			props: { error: 404 },
		}
	}
}

export default Home

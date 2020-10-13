import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../src/components/Layout'
import PostListItem from '../src/components/PostListItem'
import ProjectSection from '../src/components/ProjectSection'
import HeadApp from '../src/components/HeadApp'
import { Context } from './_app'
import '../src/styles/pages/Home.css'

const Home = () => {
	const { isMobile, clientLoad } = useContext(Context)
	const [dataPosts, setDataPost] = useState([])
	const [loading, setLoading] = useState(true)
	const [errorPosts, setErrorPosts] = useState(null)

	useEffect(() => {
		;(async () => {
			try {
				const res = await fetch(
					`${process.env.API_URL}/wp-json/wp/v2/posts?per_page=4&_embed&categories=2`
				)
				const data = await res.json()
				if (data.code === 'rest_no_route') {
					throw new Error({ error: '404' })
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
			<HeadApp />
			<Layout logoWhite>
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
							<p>
								UNA
								<br />
								HUELLA
								<br />
								VERDE
								<br />
								EN CADA
								<br />
								ESPACIO
								<br />
								CONSTRUIDO
							</p>
						</div>
						<div className="box-2">
							<div className="box-x" />
							<img src="assets/img/home/foto1.jpg" alt="" />
							<div className="box-y" />
						</div>
					</div>
				)}
				<ProjectSection />
				<div className="sec3">
					<div className="box-1">
						<div className="cont">
							<img src="assets/img/home/recurso1_Mesa_de_rabajo1.png" alt="" />
						</div>
						<div className="cont-2">
							<h2>Casa RM</h2>
							<p>
								Elaborada en: Gigante, Huila <br />
								Autores: Vinaki Arquitectos <br />
								Área: 356 m2.
							</p>
							<p>
								Vivienda residencial con un diseño contemporáneo donde su
								altitud, espacios amplios y abiertos, la convierte en una casa
								perfectamente iluminada con luz natural. Este proyecto tuvo como
								principal propósito el romper con los esquemas de lo que se
								conocía en la región, al estar ubicada en el corazón de Gigante
								Huila.
							</p>
						</div>
					</div>
					<div className="box-2">
						<video
							src="/assets/video/video.mp4"
							id="video"
							controls
							preload="auto"
						></video>
						<img
							src="assets/img/home/recurso2_Mesadetrabajo1.png"
							alt=""
							id="mesa"
						/>
					</div>
				</div>
				<div className="sec4">
					<div className="title">
						<h3>
							Autores{' '}
							<Link href="/autores">
								<a>Ver más</a>
							</Link>
						</h3>
					</div>
					<img
						src="/assets/img/autores/autores1.jpg"
						alt="Snaider Hoyos Mahecha"
					/>
					<img
						src="/assets/img/autores/autores2.jpg"
						alt="Laura Victoria Andrade"
					/>
					<div id="aut">
						<div className="autores">
							<h2>Autores</h2>
							<p>
								Laura Victoria Andrade y Snaider Hoyos Mahecha: arquitectos
								apasionados y comprometidos en diseñar y construir hogares
								sostenibles, llenos de elegancia y confort, y siempre, dejando
								una huella verde en cada una de ellas.
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
							<Link href="/blog/1">
								<a>Ver todos</a>
							</Link>
						</h3>
					</div>
					<div className="content-blog">
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
											if (clientLoad && !isMobile && index === 3) {
												return null
											}
											return <PostListItem key={post.id} post={post} />
										})}
									</>
								)}
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

export default Home

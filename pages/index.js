import { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../src/components/Layout'
import PostListItem from '../src/components/PostListItem'
import ProjectSection from '../src/components/ProjectSection'
import HeadApp from '../src/components/HeadApp'
import { Context } from './_app'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../src/styles/pages/Home.css'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Home = () => {
	const { isMobile, clientLoad } = useContext(Context)

	const [dataPosts, setDataPost] = useState([])
	const [loading, setLoading] = useState(true)
	const [errorPosts, setErrorPosts] = useState(null)

	const [dataObras, setDataObras] = useState([])
	const [loadingObras, setLoadingObras] = useState(true)
	const [errorObras, setErrorObras] = useState(null)

	const [dataInstagram, setDataInstagram] = useState([])
	const [loadingInstagram, setLoadingInstagram] = useState(true)
	const [errorInstagram, setErrorInstagram] = useState(null)

	useEffect(() => {
		;(async () => {
			try {
				const res = await fetch(
					`${process.env.API_URL}/wp-json/wp/v2/posts?per_page=2&_embed&categories=4&orderby=modified`
				)
				const data = await res.json()
				if (data.code === 'rest_no_route') {
					throw new Error({ error: '404' })
				}
				setDataObras(data)
				setLoadingObras(false)
			} catch (error) {
				setErrorObras(error)
				setLoadingObras(false)
			}
		})()
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

		getInstagramData()
	}, [])

	const getInstagramData = async () => {
		try {
			setLoadingInstagram(true)
			const res = await fetch(
				'https://www.instagram.com/vinakiarquitectos/?__a=1'
			)
			const data = await res.json()
			const mediaArray = data.graphql.user.edge_owner_to_timeline_media.edges
			const postURLS = mediaArray.map((item) => item.node.display_url)
			setDataInstagram(postURLS)
			setLoadingInstagram(false)
		} catch (error) {
			setErrorInstagram(error)
			setLoadingInstagram(false)
		}
	}

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
							<p>
								<span>UNA</span>
								<br />
								<span>HUELLA</span>
								<br />
								<span className="palabra__verde">VERDE</span>
								<br />
								<span className="cada-espacio-frase">
									EN CADA
									<br />
									ESPACIO
								</span>
								<br />
								<span className="palabra__construido">CONSTRUIDO</span>
							</p>
						</div>
						<div className="box-2">
							<div className="box-x" />
							<img
								loading="lazy"
								className="animationImage"
								src="/assets/img/home/foto1-gray.jpg"
								alt=""
							/>
							<img
								loading="lazy"
								className="imgColor animationImage"
								src="/assets/img/home/foto1.jpg"
								alt=""
							/>
							<div className="box-y" />
						</div>
					</div>
				)}
				<ProjectSection
					data={dataObras}
					error={errorObras}
					loading={loadingObras}
				/>
				<div className="sec3">
					<div className="box-1">
						<div className="cont">
							<img
								loading="lazy"
								src="/assets/img/home/recurso1_Mesa_de_rabajo1.png"
								alt=""
							/>
						</div>
						<div className="cont-2">
							<h2>Casa RM</h2>
							<br />
							<p>
								Vivienda residencial con un diseño contemporáneo donde su
								altitud, espacios amplios y abiertos, la convierte en una casa
								perfectamente iluminada con luz natural. Este proyecto tuvo como
								principal propósito el romper con los esquemas de lo que se
								conocía en la región, al estar ubicada en el corazón de Gigante
								Huila.
							</p>
							<Link href={`/obras/post/casa-rm`}>
								<a className="view-project">Ver proyecto completo</a>
							</Link>
						</div>
					</div>
					<div className="box-2">
						<video
							src="/assets/video/video.mp4"
							id="video"
							controls
							preload="auto"
							poster="https://admin.vinakiarquitectos.com/wp-content/uploads/2020/10/CASA-RM.jpg"
						></video>
						<img
							src="/assets/img/home/recurso2_Mesadetrabajo1.png"
							loading="lazy"
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
					<h4 className="autorName">Snaider Hoyos Mahecha</h4>
					<h4 className="autorName">Laura Victoria Andrade</h4>
					<img
						src="/assets/img/autores/autores1.JPG"
						alt="Snaider Hoyos Mahecha"
						loading="lazy"
						className="izquierda"
					/>
					<img
						src="/assets/img/autores/autores2.JPG"
						alt="Laura Victoria Andrade"
						loading="lazy"
						className="derecha"
					/>
					<div id="aut">
						<div className="autores">
							<p>
								Snaider Hoyos Mahecha y Laura Victoria Andrade: arquitectos
								apasionados y comprometidos en diseñar y construir hogares
								sostenibles, llenos de elegancia y confort, y siempre, dejando
								una huella verde en cada una de ellas.
							</p>
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
					<h3>Síguenos en Instagram</h3>
					<a
						href={process.env.INSTAGRAM}
						target="_blank"
						rel="noopener noreferrer"
						className="instagram__link"
					>
						<img
							className="footer__red"
							src="/assets/icons/instagram.svg"
							alt="Instagram"
							loading="lazy"
						/>
						<span>@vinakiarquitectos</span>
					</a>
					<section className="home__slider">
						{loadingInstagram ? (
							<p>Cargando...</p>
						) : (
							<>
								{errorInstagram ? (
									<p>Ocurrió un error al traer la información de instagram</p>
								) : (
									<Swiper
										spaceBetween={isMobile ? 15 : 50}
										slidesPerView={isMobile ? 2 : 4}
										navigation
									>
										{dataInstagram.map((src) => {
											return (
												<SwiperSlide key={src}>
													<img
														loading="lazy"
														className="home__slider__img"
														src={src}
														alt="Item"
													/>
												</SwiperSlide>
											)
										})}
									</Swiper>
								)}
							</>
						)}
					</section>
				</div>
			</Layout>
		</>
	)
}

export default Home

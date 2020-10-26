import React, { useEffect, useState, useContext } from 'react'
import HeadApp from '../../../src/components/HeadApp'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import Layout from '../../../src/components/Layout'
import { Context } from '../../_app'
import '../../../src/styles/pages/obraInvidual.css'

import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Post = (data, error) => {
	const [imagesSRC, setImagesSRC] = useState([])
	const [videosSRC, setVideosSRC] = useState([])
	const { isMobile, clientLoad } = useContext(Context)
	const [openModal, setOpenModal] = useState(false)
	const [photoIndex, setPhotoIndex] = useState(0)

	useEffect(() => {
		const images = document.querySelectorAll('.wp-block-image')
		const videos = document.querySelectorAll('.wp-block-video')
		let imagesSRCArray = []
		let videosSRCArray = []
		for (let i = 0; i < images.length; i++) {
			imagesSRCArray.push(images[i].children[0].src)
		}
		for (let i = 0; i < videos.length; i++) {
			videosSRCArray.push(videos[i].children[0].src)
		}
		setVideosSRC(videosSRCArray)
		setImagesSRC(imagesSRCArray)
	}, [])

	return (
		<>
			<HeadApp title={data.data[0].title.rendered} />
			<Layout isObra>
				<img
					className="obraIndividual__lines"
					src="/assets/img/obras/recurso3.png"
					alt="Recurso"
				/>
				<main className="obraIndividual">
					<section className="obraIndividual__obra">
						<div>
							<h1 className="obraIndividual__title">
								{data.data[0].title.rendered}
							</h1>
							<div
								className="obraIndividual__obra__text"
								dangerouslySetInnerHTML={{
									__html: data.data[0].content.rendered,
								}}
							></div>
						</div>
						<picture className="obraIndividual__obra__imgContainer">
							{data.data[0]._embedded['wp:featuredmedia'] ? (
								<img
									className="obraIndividual__obra__imgContainer__img"
									src={data.data[0]._embedded['wp:featuredmedia'][0].source_url}
									alt={data.data[0].title.rendered}
								/>
							) : (
								<img
									className="obraIndividual__obra__imgContainer__img"
									src="/assets/img/global/not-found.jpg"
									alt={data.data[0].title.rendered}
								/>
							)}
						</picture>
					</section>
					{imagesSRC.length ? (
						<section className="obraIndividual__slider">
							<Swiper
								spaceBetween={50}
								slidesPerView={isMobile ? 1 : 3}
								navigation
							>
								{videosSRC.map((src, index) => {
									return (
										<SwiperSlide key={src}>
											<video
												src={src}
												controls
												preload="auto"
												className="obraIndividual__slider__img"
												/* poster="https://admin.vinakiarquitectos.com/wp-content/uploads/2020/10/CASA-RM.jpg" */
											></video>
										</SwiperSlide>
									)
								})}
								{imagesSRC.map((src, index) => {
									return (
										<SwiperSlide key={src}>
											<img
												onClick={() => {
													setOpenModal(true)
													setPhotoIndex(index)
												}}
												className="obraIndividual__slider__img"
												src={src}
												alt="Item"
											/>
										</SwiperSlide>
									)
								})}
							</Swiper>
							{openModal && (
								<Lightbox
									mainSrc={imagesSRC[photoIndex]}
									nextSrc={imagesSRC[(photoIndex + 1) % imagesSRC.length]}
									prevSrc={
										imagesSRC[
											(photoIndex + imagesSRC.length - 1) % imagesSRC.length
										]
									}
									onCloseRequest={() => {
										setOpenModal(false)
									}}
									onMovePrevRequest={() =>
										setPhotoIndex(
											(photoIndex + imagesSRC.length - 1) % imagesSRC.length
										)
									}
									onMoveNextRequest={() =>
										setPhotoIndex((photoIndex + 1) % imagesSRC.length)
									}
								/>
							)}
						</section>
					) : (
						''
					)}
				</main>
			</Layout>
		</>
	)
}

export async function getServerSideProps({ params }) {
	try {
		const res = await fetch(
			`${process.env.API_URL}/wp-json/wp/v2/posts?slug=${params.slug}&_embed&categories=4`
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

export default Post

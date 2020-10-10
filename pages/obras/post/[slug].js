import React, { useEffect } from 'react'
import Layout from '../../../src/components/Layout'
import '../../../src/styles/pages/obraInvidual.css'

const Post = (data, error) => {
	useEffect(() => {
		const images = document.querySelectorAll('.wp-block-image')

		for (let i = 0; i < images.length; i++) {
			console.log(images[i].children[0].src)
		}
	}, [])
	return (
		<Layout>
			<main className="obraIndividual">
				<section className="obraIndividual__obra">
					<div>
						<h1></h1>
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
				<section></section>
			</main>
		</Layout>
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

import React, { useEffect, useState } from 'react'
import Layout from '../../src/components/Layout'
import HeadApp from '../../src/components/HeadApp'
import { useRouter } from 'next/router'
import '../../src/styles/pages/Blog.css'

const Blog = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const { query } = useRouter()

	useEffect(() => {
		;(async () => {
			const res = await fetch('')
			console.log(query.page)
		})()
	}, [])

	return (
		<>
			<HeadApp title="Blog" />
			<Layout>
				<div>
					<div className="sec1-blog">
						<div className="box-1">
							<p>BLOG</p>
						</div>
						<div className="box-2">
							<div className="box-x" />
							<img src="/assets/img/obras/recurso1.png" alt="" />
						</div>
					</div>
					<div className="blog">
						<div className="sec1-blog">
							<div className="boxlg">
								<img src="/assets/img/blog/foto1.png" alt="" />
								<p className="fecha">fecha de publicacion</p>
								<p className="texto">
									Lorem ipsum dolor sit amet consect-blogetur adipisicing elit.
									Maxime ipsam, repellendus ex dolor totam odit.
								</p>
							</div>
							<div className="boxsm">
								<img src="/assets/img/blog/foto2.png" alt="" />
								<p className="fecha">fecha de publicacion</p>
								<p className="texto">
									Lorem ipsum dolor sit amet consect-blogetur adipisicing elit.
									Maxime ipsam, repellendus ex dolor totam odit.
								</p>
							</div>
						</div>
						<div className="sec2-blog">
							<div className="box">
								<img src="/assets/img/blog/foto3.png" alt="" />
								<p className="fecha">fecha de publicacion</p>
								<p className="texto">
									Lorem ipsum dolor sit amet consect-blogetur adipisicing elit.
									Maxime ipsam, repellendus ex dolor totam odit.
								</p>
							</div>
							<div className="box">
								<img src="/assets/img/blog/foto4.png" alt="" />
								<p className="fecha">fecha de publicacion</p>
								<p className="texto">
									Lorem ipsum dolor sit amet consect-blogetur adipisicing elit.
									Maxime ipsam, repellendus ex dolor totam odit.
								</p>
							</div>
							<div className="box">
								<img src="/assets/img/blog/foto5.png" alt="" />
								<p className="fecha">fecha de publicacion</p>
								<p className="texto">
									Lorem ipsum dolor sit amet consect-blogetur adipisicing elit.
									Maxime ipsam, repellendus ex dolor totam odit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Blog

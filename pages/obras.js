import React from 'react'
import Layout from '../src/components/Layout'
import HeadApp from '../src/components/HeadApp'
import '../src/styles/pages/Obras.css'

const obras = () => {
	return (
		<>
			<HeadApp title="Obras" />
			<Layout>
				<div>
					<div className="sec1-obras">
						<div className="box-1">
							<p>OBRAS</p>
						</div>
						<div className="box-2">
							<div className="box-x" />
							<img src="assets/img/obras/recurso1.png" alt="" />
						</div>
					</div>
					<div className="media">
						<figure className="snip0015 large">
							<img src="assets/img/obras/foto1.png" alt="sample38" />
							<figcaption>
								<h2>Nombre de la obra</h2>
								<p>Ver más</p>
								<a href="#" />
							</figcaption>
						</figure>
						<figure className="snip0015">
							<img src="assets/img/obras/foto2.png" alt="sample39" />
							<figcaption>
								<h2>Nombre de la obra</h2>
								<p>Ver más</p>
								<a href="#" />
							</figcaption>
						</figure>
						<figure className="snip0015">
							<img src="assets/img/obras/foto3.png" alt="sample40" />
							<figcaption>
								<h2>Nombre de la obra</h2>
								<p>Ver más</p>
								<a href="#" />
							</figcaption>
						</figure>
						<figure className="snip0015 large2">
							<img src="assets/img/obras/foto4.png" alt="sample38" />
							<figcaption>
								<h2>Nombre de la obra</h2>
								<p>Ver más</p>
								<a href="#" />
							</figcaption>
						</figure>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default obras

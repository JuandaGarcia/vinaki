import React from 'react'
import Layout from '../src/components/Layout'
import HeadApp from '../src/components/HeadApp'
import '../src/styles/pages/Autores.css'

const Autores = () => {
	return (
		<>
			<HeadApp title="Autores" />
			<Layout logoWhite>
				<div>
					<div className="sec1-autores">
						<div className="box-2">
							<h3>AUTORES</h3>
							<div className="box-x" />
							<img src="assets/img/autores/fondo.png" alt="" />
						</div>
					</div>
					<div className="sec2-autores">
						<p>
							Lorem ipsum dolor sit amet consect-autoresetur adipisicing elit.
							Velit at sed, corrupti ab laborum molestiae iure culpa et
							laboriosam non neque maiores dolor, magni deserunt ipsam
							repudiandae, ipsa veniam, fugiat. Lorem ipsum dolor sit amet
							consect-autoresetur adipisicing elit. Velit at sed, corrupti ab
							laborum molestiae iure culpa et laboriosam non neque maiores
							dolor, magni deserunt ipsam repudiandae, ipsa veniam, fugiat.
							fugiat. Lorem ipsum dolor sit amet consect-autoresetur adipisicing
							elit. Velit at sed, corrupti ab laborum molestiae iure culpa et
							laboriosam non neque maiores dolor, magni deserunt ipsam
							repudiandae, ipsa veniam, fugiat.
						</p>
					</div>
					<div className="sec3-autores">
						<div className="text">
							<h3>Lorem Ipsum</h3>
							<p>
								Lorem ipsum, dolor sit amet <br /> quaerat, voluptatum saepe
								placeat alias pariatur similique sint fuga praesentium nisi
								libero nulla sequi dolore consequatur ex eum minus eos!
								<br /> quaerat, voluptatum saepe
							</p>
							<p>
								Lorem ipsum, dolor sit amet consect-autoresetur adipisicing
								elit. Delectus veniam quaerat, voluptatum saepe placeat alias
								pariatur similique sint fuga praesentium nisi libero nulla sequi
								dolore consequatur ex eum minus eos! <br />
								quaerat, voluptatum saepe
							</p>
						</div>
						<div className="image">
							<img src="assets/img/autores/foto1.png" alt="" />
						</div>
					</div>
					<div className="sec3-autores">
						<div className="image">
							<img src="assets/img/autores/foto1.png" alt="" />
						</div>
						<div className="text">
							<h3>Lorem Ipsum</h3>
							<p>
								Lorem ipsum, dolor sit amet quaerat, voluptatum saepe placeat
								alias pariatur similique sint fuga praesentium nisi libero nulla
								sequi dolore consequatur ex eum minus eos!
								<br /> quaerat, voluptatum saepe
							</p>
							<p>
								Lorem ipsum, dolor sit amet consect-autoresetur adipisicing
								elit. Delectus veniam quaerat, voluptatum saepe placeat alias
								pariatur similique sint fuga praesentium nisi libero nulla sequi
								dolore consequatur ex eum minus eos! <br />
								quaerat, voluptatum saepe
							</p>
						</div>
					</div>
					<div className="sec4-autores">
						<img src="assets/img/autores/recurso1.png" alt="" />
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Autores

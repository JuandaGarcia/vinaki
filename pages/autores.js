import React from 'react'
import Layout from '../src/components/Layout'
import HeadApp from '../src/components/HeadApp'
import '../src/styles/pages/Autores.css'

const Autores = () => {
	return (
		<>
			<HeadApp title="Autores" />
			<Layout>
				<main className="autores">
					<h1 className="autores__h autores__title">AUTORES</h1>

					<p className="autores__text">
						Fundada en 2016, Vinaki Arquitectos nace para dejar huella en la
						historia de la arquitectura, nace para crear espacios entre el
						confort y lo selecto, convirtiendo cada proyecto en una obra de
						arte.
						<br />
						Nos reinventamos para llegar a cada rincon del planeta. Nuestra
						arquitectura está enmarcada por un estilo que nos lleva a construir
						diferente; reinterpretando la contemporaneidad y la arquitectura
						sostenible conservando la elegancia y lo impecable.
						<br />
						<br />
						La colaboración entre la experiencia, versatilidad y nuestro equipo
						multidisciplinar nos permiten ir desde el diseño, urbanismo,
						paisajismo, interiorismo y consultoría en optimización de procesos
						en proyectos de carácter arquitectónico y constructivo. Encontrando
						todo en Vinaki.
					</p>
					<div className="autores__section">
						<img
							loading="lazy"
							src="/assets/img/autores/autores1.JPG"
							alt="Snaider Hoyos Mahecha"
							className="autores__section__img"
						/>
						<div className="autores__section__text">
							<h2 className="autores__h -name">Snaider Hoyos Mahecha</h2>
							<p>
								<strong>Arquitecto co-fundador y gerente de Vinaki.</strong>
							</p>
							<br />
							<p className="autor__text">
								Encargado de direccionar el departamento de diseño generando la
								conceptualización que nos identifica como arquitectos.
							</p>
						</div>
					</div>
					<div className="autores__section -reverse">
						<div className="autores__section__text">
							<h2 className="autores__h -name">Laura Victoria Andrade Falla</h2>
							<p>
								<strong>
									Arquitecta especialista en gerencia de proyectos de
									construcción e infraestructura y directora de proyectos en
									Vinaki Arquitectos.
								</strong>
							</p>
							<br />
							<p className="autor__text">
								Encargada de diseñar planes y programas de desarrollo en la
								construcción. Definir la formulación y progreso de los proyectos
								que determine el plan diseñado. Evaluar la viabilidad técnica y
								económica implantando los correctivos en el desarrollo para
								llevar a cabo la ejecución de las obras en tiempo, costo,
								calidad y seguridad; haciendo posible que todos nuestros
								clientes hagan realidad sus proyectos soñados.
							</p>
						</div>
						<img
							loading="lazy"
							src="/assets/img/autores/autores2.JPG"
							alt="Laura Victoria Andrade Falla"
							className="autores__section__img"
						/>
					</div>
				</main>
				<img
					loading="lazy"
					className="autores__lines"
					src="/assets/img/autores/recurso1.png"
					alt="Recurso"
				/>
			</Layout>
		</>
	)
}

export default Autores

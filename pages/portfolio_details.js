//https://run.mocky.io/v3/ac3b2bad-7025-4ca2-9ac6-48e1b7e93a0c

import React, { useEffect, useState } from 'react';
import Header from '../components/global/header';
const axios = require('axios');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faArrowLeft,
	faAngleRight,
	faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/global/footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PricingMessage from '../components/global/pricing_message';
import { IPhoneX } from 'react-device-frames';

import PricingButton from '../components/global/pricing_button';
import { getProjetoDetalhes } from '../servicos';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';

const PortfolioDetails = () => {
	const [Inicio, setInicio] = useState(true);
	const [show_header, setShowHeader] = useState(false);
	const [project, setProject] = useState({});
	const [ImagensProjeto, setImagensProjeto] = useState();
	const [current_image, setCurrentImage] = useState(0);
	const [InteracaoUsuario, setInteracaoUsuario] = useState(false);
	let curr_img;
	let number_of_images;
	let to_insert;
	useEffect(() => {
		setShowHeader(true);
		async function helper() {
			let current_url = document.location.href;
			current_url = new URL(current_url);
			let project_id = current_url.searchParams.get('id');

			let ProjetoDetalhes = await getProjetoDetalhes(project_id);

			//COLOCAR API NOVAMENTE
			setProject(ProjetoDetalhes ? ProjetoDetalhes.data : null);
			console.log('ProjetoDetalhes : ' + JSON.stringify(ProjetoDetalhes));

			let ImagensProjetoAux = ProjetoDetalhes
				? ProjetoDetalhes.data
					? ProjetoDetalhes.data.imagens
					: null
				: null;
			setImagensProjeto(ImagensProjetoAux);
			//setChangeCurrentImage(ImagensProjetoAux);
		}
		helper();
	}, [Inicio]);

	const setChangeCurrentImage = (
		ImagensProjetoParm,
		current_image_parm = 0
	) => {
		console.log('ImagensProjetoParm : ' + JSON.stringify(ImagensProjetoParm));
		console.log('current_image_parm : ' + current_image_parm);

		let number_of_images = ImagensProjetoParm
			? ImagensProjetoParm.length
			: ImagensProjeto.length;

		console.log('number_of_images : ' + number_of_images);
		console.log('InteracaoUsuario : ' + InteracaoUsuario);

		if (!InteracaoUsuario) {
			setInterval(() => {
				if (current_image_parm == number_of_images - 1) {
					setChangeCurrentImage(ImagensProjetoParm, 0);
					setCurrentImage(0);
				} else {
					setChangeCurrentImage(ImagensProjetoParm, current_image_parm + 1);
					setCurrentImage(current_image_parm + 1);
				}
			}, 5000);
		}
	};
	return (
		<>
			{show_header ? <Header></Header> : ''}
			<PricingButton />
			{project != false ? (
				<div>
					<main>
						{ImagensProjeto &&
							ImagensProjeto.map((img) => {
								<img src={img.link} style={{ display: 'none' }} />;
							})}
						<section className='text-light background-primary waves'>
							<div className='spacer' />
							<div className='width-80-vw page-header-content'>
								<div className='container'>
									<div className='row align-items-center text-justify'>
										<div className='col-lg-6'>
											<h1 className='page-header-title text-left'>
												{project.nome}
											</h1>
											<p
												className='page-header-text mb-5'
												style={{
													textAlign: 'left',
													marginTop: 15,
													color: '#CA8072',
													fontSize: 17,
												}}
											>
												{project.descricao_curta}
											</p>
											<div className='mx-auto text-center'>
												<div
													class='row'
													style={{
														width: 'fit-content',
														marginLeft: 0,
													}}
												>
													{project.link_apple ? (
														<a
															className='mr-2'
															target='_blank'
															href={project.link_apple}
														>
															<img
																style={{ height: '40px', marginRight: 10 }}
																src='/static/appstore_badge.svg'
															/>
														</a>
													) : (
														''
													)}
													{project.link_google ? (
														<a target='_blank' href={project.link_google}>
															<img
																style={{ height: '40px' }}
																src='/static/playstore_badge.svg'
															/>
														</a>
													) : (
														''
													)}
												</div>
											</div>
										</div>

										<div className='col-lg-6 z-1 pt-5'>
											<div className='device-wrapper mx-auto mb-n15 text-center'>
												<button
													className='button-secondary font-weight-bold h2'
													style={{
														marginRight: '-95px',
														backgroundColor: 'rgba(0,0,0,0)',
														color: 'white',
													}}
													onClick={() => {
														console.log('current_image : ' + current_image);
														setInteracaoUsuario(true);
														if (current_image == 0) {
															setCurrentImage(ImagensProjeto.length - 1);
														} else {
															setCurrentImage(current_image - 1);
														}
													}}
												>
													<FontAwesomeIcon
														style={{ fontSize: '150% !important' }}
														icon={faAngleLeft}
													/>
												</button>

												<IPhoneX
													width={330}
													height={700}
													screenshot={
														ImagensProjeto && ImagensProjeto[current_image].link
													}
												/>

												<button
													className='button-secondary font-weight-bold h2'
													style={{
														marginLeft: '-95px',
														backgroundColor: 'rgba(0,0,0,0)',
														color: 'white',
													}}
													onClick={() => {
														console.log('current_image : ' + current_image);
														setInteracaoUsuario(true);
														if (current_image == ImagensProjeto.length - 1) {
															setCurrentImage(0);
														} else {
															setCurrentImage(current_image + 1);
														}
													}}
												>
													<FontAwesomeIcon
														style={{ fontSize: '150% !important' }}
														icon={faAngleRight}
													/>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
							<path
								fill='#940405'
								fill-opacity='1'
								d='M0,224L34.3,208C68.6,192,137,160,206,144C274.3,128,343,128,411,133.3C480,139,549,149,617,149.3C685.7,149,754,139,823,122.7C891.4,107,960,85,1029,69.3C1097.1,53,1166,43,1234,64C1302.9,85,1371,139,1406,165.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'
							></path>
						</svg>
						<div className='sep-mobile' />
						<section id='post' style={{ marginTop: '-5vh' }}>
							<div className='width-80-vw text-center mb-5'>
								<div className='row justify-content-center'>
									<div className='col-lg-8'>
										<img
											src={project.banner_maior}
											className='img-fluid'
											style={{ marginTop: 20, marginBottom: 20 }}
										/>
										<br />
										<br />
										<p style={{ textAlign: 'left' }}>
											{ReactHtmlParser(project.descricao)}
										</p>
										<hr></hr>
										<a href='/portfolio'>
											<button
												style={{ marginTop: '30px', marginBottom: '30px' }}
												className='button-secondary'
											>
												Voltar
											</button>
										</a>
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>
			) : (
				''
			)}
			<PricingMessage
				message_title='Mãos a obra!'
				message='Venha conosco e será nossa missão ajudar sua empresa a estruturar um projeto vencedor e entregá-lo pronto para trazer os resultados que tanto deseja.'
				first_button='Solicite um orçamento'
				first_button_link='/orcamento'
				second_button='Entre em contato'
				second_button_link='/contato'
			/>
			<Footer />
		</>
	);
};

export default PortfolioDetails;

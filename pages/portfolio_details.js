//https://run.mocky.io/v3/ac3b2bad-7025-4ca2-9ac6-48e1b7e93a0c

import React, { useEffect, useState } from 'react';
import Header from '../components/global/header';
const axios = require('axios');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/global/footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PricingMessage from '../components/global/pricing_message';
import { IPhoneX } from 'react-device-frames';

import PricingButton from '../components/global/pricing_button';
import { getProjetoDetalhes } from '../servicos';

const PortfolioDetails = () => {
	const [project, setProject] = useState({});
	const [current_image, setCurrentImage] = useState(0);
	let curr_img;
	let number_of_images;
	let to_insert;
	useEffect(() => {
		async function helper() {
			let current_url = document.location.href;
			current_url = new URL(current_url);
			let project_id = current_url.searchParams.get('id');

			let ProjetoDetalhes = await getProjetoDetalhes(project_id);
			setProject(ProjetoDetalhes.data);

			console.log('ProjetoDetalhes : ' + JSON.stringify(ProjetoDetalhes));

			let curr_img = 0;
			setInterval(() => {
				console.log(curr_img);
				setCurrentImage(curr_img);
				curr_img++;
				if (curr_img >= number_of_images) {
					curr_img = 0;
				}
			}, 4000);
		}
		helper();
	}, []);

	return (
		<>
			<Header></Header>
			<PricingButton />
			{project != false ? (
				<div>
					<main>
						{project &&
							project.carousel_images &&
							project.carousel_images.map((img) => {
								<img src={img} style={{ display: 'none' }} />;
							})}
						<section className='text-light background-primary waves'>
							<div className='spacer' />
							<div className='page-header-content'>
								<div className='container'>
									<div className='row align-items-center text-center'>
										<div className='col-lg-6'>
											<h1 className='page-header-title'>{project.nome}</h1>
											<p className='page-header-text mb-5'>
												{project.descricao_curta}
											</p>
											<div className='mb-10'>
												{project.link_apple ? (
													<a
														className='mr-3'
														target='_blank'
														href={project.link_apple}
													>
														<img
															style={{ height: '40px' }}
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

										<div className='col-lg-6 z-1 pt-5'>
											<div className='device-wrapper mx-auto mb-n15 text-center'>
												<button
													className='button-secondary'
													style={{ marginRight: '-80px' }}
													onClick={() => {
														if (current_image - 1 < 0) {
															setCurrentImage(
																project.carousel_images.length - 1
															);
														} else setCurrentImage(current_image - 1);
													}}
												>
													<FontAwesomeIcon icon={faArrowLeft} />
												</button>

												<IPhoneX
													width={320}
													height={640}
													screenshot={
														project &&
														project.carousel_images &&
														project.carousel_images[current_image]
													}
												></IPhoneX>

												<button
													className='button-secondary'
													style={{ marginLeft: '-80px' }}
													onClick={() => {
														if (
															current_image + 1 >=
															project.carousel_images.length
														) {
															setCurrentImage(0);
														} else setCurrentImage(current_image + 1);
													}}
												>
													<FontAwesomeIcon icon={faArrowRight} />
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
										<img src={project.post_image} className='img-fluid' />
										<br />
										<br />
										<p style={{ textAlign: 'justify' }}>{project.descricao}</p>
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
				second_button='Entre em contato'
			/>
			<Footer />
		</>
	);
};

export default PortfolioDetails;

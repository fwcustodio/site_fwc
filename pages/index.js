import React, { useState } from 'react';
import Header from '../components/global/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMobile,
	faCode,
	faPen,
	faPlane,
	faCoffee,
	faTv,
	faCat,
} from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import PortfolioCards from '../components/global/portfolio_cards.js';
import Testimonials from '../components/global/testimonials.js';
import FAQ from '../components/global/faq.js';
import PricingMessage from '../components/global/pricing_message';
import Footer from '../components/global/footer';
import PricingButton from '../components/global/pricing_button';

class Home extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<>
				<Header></Header>
				{/* introdução */}

				<PricingButton />
				<section className='background-primary introduction'>
					<div className='spacer' />
					<div className='container-fluid introduction-content width-80-vw'>
						<div className='align-items-center row'>
							<Fade left>
								<div className='col-lg-6 py-2 py-md-5'>
									<p className='h6 text-white mb-2'>Você pensa, nós fazemos</p>
									<p className='h2 text-white mb-4'>
										Crie seus aplicativos do jeito certo e com a qualidade que
										você precisa
									</p>

									<div
										className='d-flex flex-wrap justify-content-center'
										style={{ marginTop: '40px' }}
									>
										<a href='#'>
											<button className='button-secondary'>
												Quanto custa um app?
											</button>
										</a>
										<span style={{ minWidth: '3px' }} />
										<a href='/portfolio'>
											<button
												className='button-transparent'
												style={{ fontWeight: 'bold' }}
											>
												Conheça nosso portfólio
											</button>
										</a>
									</div>
								</div>
							</Fade>
							<Fade right>
								<div
									className='col-lg-6 pl-lg-5 text-center'
									style={{ marginBottom: '-8rem' }}
								>
									<img
										src='https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280'
										className='img-fluid'
										style={{
											borderRadius: '20px',
											marginLeft: '25px',
											boxShadow:
												'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;',
										}}
									/>
								</div>
							</Fade>
						</div>
					</div>
				</section>
				{/*segunda seção*/}
				<div style={{ height: '20vh' }} />
				<section>
					<div className='width-80-vw' style={{ margin: '0 auto' }}>
						<div className='row align-items-center justify-content-center'>
							<div className='col-lg-6'>
								<p className='h4 mb-md-0 mb-4'>
									Dezenas de aplicativos mobile construídos para empresas e
									outros segmentos
								</p>
							</div>
							<div className='col-lg-6'>
								<p className='h4 lead mb-0'>
									Estabelecida em Cuiabá, a FWC está no mercado desde 2020 e é
									referência em inovação, tecnologia e versatilidade.
								</p>
							</div>
						</div>
					</div>
				</section>
				{/*terceira seção*/}
				<section
					style={{
						marginTop: '100px',
						paddingTop: '20px',
						paddingBottom: '20px',
					}}
				>
					<div className='background-secondary'>
						<div className='width-80-vw'>
							<div className='container py-5'>
								<div className='row justify-content-center'>
									<div className='col-lg-8'>
										<div className='text-center mb-10'>
											<span className='h2'>
												Soluções em desenvolvimento de aplicativos mobile para
												sua empresa
											</span>
											<p className='lead'>
												Conheça o trabalho que fazemos e as soluções que podemos
												oferecer.
											</p>
										</div>
									</div>
								</div>
								<hr />
								<br />
								<div className='row text-center'>
									<div className='col-lg-4 mb-5 mb-lg-0'>
										<Fade left>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faMobile} />
											</div>
										</Fade>
										<span className='h3'>Desenvolvimento Mobile</span>
										<p className='mb-0'>
											Tecnologia de ponta no desenvolvimento de aplicativos
											mobile para Android e iOS.
										</p>
									</div>
									<div className='col-lg-4 mb-5 mb-lg-0'>
										<Fade bottom>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faCode} />
											</div>
										</Fade>
										<span className='h3'>Back-End & APIs</span>
										<p className='mb-0'>
											Tudo que o seu aplicativo precisa para funcionar
											plenamente na nuvem: infraestrutura completa de banco de
											dados, servidores, APIs, etc.
										</p>
									</div>
									<div className='col-lg-4 mb-5 mb-lg-0'>
										<Fade right>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faPen} />
											</div>
										</Fade>
										<span className='h3'>Design Funcional</span>
										<p className='mb-0'>
											Equipe especializada em design inovador, prático e
											user-friendly. para Sistemas Web e Aplicativos Android e
											iOS
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*quarta seção*/}
				<section className='mt-5'>
					<div className='width-80-vw text-center'>
						<p className='h2'>Conheça nosso portfólio</p>
						<p className='h3 font-weight-light'>
							Conheça alguns cases de sucesso desenvolvidos pela FWC
						</p>
						<hr></hr>
						<PortfolioCards limit={8} />
						<a href='/portfolio'>
							<button
								style={{ marginTop: '50px' }}
								className='button-secondary'
							>
								Ir para portifólio
							</button>
						</a>
					</div>
				</section>
				{/*seção testemunhos*/}
				<section
					style={{
						marginTop: '100px',
						paddingTop: '20px',
						paddingBottom: '20px',
					}}
				>
					<div className='background-secondary py-5'>
						<div className='row justify-content-center'>
							<div className='col-lg-8 '>
								<div className='text-center mb-10 width-80-vw'>
									<span className='h2'>O que estão falando de nós</span>
									<p className='lead p-3 width-80-vw'>
										Nos tornamos referência de mercado pela qualidade e inovação
										de nossos projetos e pela filosofia de trabalho.
									</p>
								</div>
							</div>
						</div>
						<div className='row width-80-vw testimonials'>
							<Testimonials />
						</div>
						<div
							className='row justify-content-center text-center width-80-vw'
							style={{ fontSize: '5rem', margin: '0 auto' }}
						>
							<div className='col-6 col-sm-3 d-flex justify-content-center mb-5 mb-lg-0'>
								<Fade bottom delay={0}>
									<a href='#' className='text-dark'>
										<FontAwesomeIcon icon={faPlane} />
									</a>
								</Fade>
							</div>
							<div className='col-6 col-sm-3 d-flex justify-content-center mb-5 mb-lg-0'>
								<Fade bottom delay={100}>
									<a href='#' className='text-dark'>
										<FontAwesomeIcon icon={faCoffee} />
									</a>
								</Fade>
							</div>
							<div className='col-6 col-sm-3 d-flex justify-content-center mb-5 mb-lg-0'>
								<Fade bottom delay={300}>
									<a href='#' className='text-dark'>
										<FontAwesomeIcon icon={faTv} />
									</a>
								</Fade>
							</div>
							<div className='col-6 col-sm-3 d-flex justify-content-center mb-5 mb-lg-0'>
								<Fade bottom delay={400}>
									<a href='#' className='text-dark'>
										<FontAwesomeIcon icon={faCat} />
									</a>
								</Fade>
							</div>
						</div>
					</div>
				</section>
				<section style={{ marginTop: '100px', paddingBottom: '50px' }}>
					<div
						className='row justify-content-center width-80-vw'
						style={{ margin: '0 auto' }}
					>
						<div className='col-lg-8'>
							<div className='text-center mb-10'>
								<span className='h2'>Dúvidas frequentes</span>
								<p className='lead p-3'>
									Perguntas e dúvidas mais frequentes sobre a criação e
									desenvolvimento de aplicativos mobile
								</p>
							</div>
						</div>
					</div>
					<hr></hr>
					<div className='width-80-vw shaded'>
						<FAQ
							questions={[
								'Qual o prazo para construir um aplicativo?',
								'É possível desenvolver o mesmo aplicativo para Android e IOS?',
								'Quanto custa para desenvolver um aplicativo?',
								'Um aplicativo tem custos para estar publicado nas lojas?',
								'Um aplicativo necessita de manutenção e suporte técnico permanente',
							]}
							answers={[
								'Depende da sua complexidade, para projetos de baixa e média complexidade, o prazo varia de 90 a 150 dias.',
								'Sim, porém, usando as linguagens nativas o aplicativo precisa ser escrito 2 vezes. Usando uma tecnologia híbrida ele é escrito só uma vez sendo assim desenvolvido mais rápido e com um menor custo final.',
								'Depende muito dos seus requisitos, do tamanho, das funcionalidades e integrações. Nossa equipe está preparada para ajudá-lo neste orçamento, você nos conta sua necessidade e, após rápida análise, apresentamos um valor estimado.',
								'Sim, tanto para publicação na Google Play como na Apple Store, existem custos de inscrição e anuidade.',
								'Sim, como qualquer outro software, um aplicativo necessita de constantes melhorias e correções. Além disso, ele deve estar sempre em conformidade com as atualizações de versões e dos sistemas operacionais Android e iOS. Caso contrário pode ser até removido das lojas.',
							]}
						/>
					</div>
				</section>
				<PricingMessage
					message_title='Mãos a obra!'
					message='Venha conosco e será nossa missão ajudar sua empresa a estruturar um projeto vencedor e entregá-lo pronto para trazer os resultados que tanto deseja.'
					first_button='Solicite um orçamento'
					second_button='Entre em contato'
					className='width-80-vw'
				/>
				<Footer />
			</>
		);
	}
}

export default Home;

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
import PortfolioBig from '../components/global/portfolio_big.js';
import PricingMessage from '../components/global/pricing_message';
import Footer from '../components/global/footer';
import PricingButton from '../components/global/pricing_button';
class Portfolio extends React.Component {
	
	state = {
		show_header: false
	}
	componentDidMount() {
		this.setState({show_header: true})
	}

	render() {
		return (
			<>
				{
					this.state.show_header ? <Header/> : ''
				}
				<PricingButton />
				{/* introdução */}
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
											<span className='h2'>Portfólio</span>
											<p className='lead'>Cases de sucesso desenvolvidos.</p>
										</div>
									</div>
								</div>
								<hr />
								<br />
								<PortfolioBig start={0} limit={4} />
							</div>
						</div>
					</div>
				</section>
				<section className='mt-5 py-5'>
					<div className='width-80-vw text-center'>
						<p className='h2'>Conheça nosso portfólio</p>
						<p className='h4 font-weight-light'>
							Saiba mais sobre alguns dos aplicativos que marcaram a história da
							DevMaker
						</p>
						<hr></hr>
						<PortfolioCards Completo={true} />
					</div>
				</section>
				<PricingMessage
					message_title='Mãos a obra!'
					message='Venha conosco e será nossa missão ajudar sua empresa a estruturar um projeto vencedor e entregá-lo pronto para trazer os resultados que tanto deseja.'
					first_button='Solicite um orçamento'
					first_button_link="/orcamento"
					second_button='Entre em contato'
					second_button_link="/contato"
				/>
				<Footer />
			</>
		);
	}
}

export default Portfolio;

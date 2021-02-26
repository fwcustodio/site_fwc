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
  faUserTie,
  faPenNib,
  faServer,
  faTasks


} from '@fortawesome/free-solid-svg-icons';

import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import Clients from '../components/global/clients.js';
import Testimonials from '../components/global/testimonials.js';
import FAQ from '../components/global/faq.js';
import PricingMessage from '../components/global/pricing_message';
import Footer from '../components/global/footer';
import PricingButtonVar from '../components/global/pricing_button_var';

class Clientes extends React.Component {

	state = {
		show_header: false
	}

	componentDidMount() {
		this.setState({show_header: true})
	}

	render() {
		return (
			<>
				{this.state.show_header ? <Header></Header> : ''}
			
			
				<PricingButtonVar/>
				<section
					style={{
						paddingBottom: '20px',
					}}
				>
					<div className='background-secondary'>
						<div className='width-80-vw'>
							<div className='container py-5'>
								<div className='row justify-content-center'>
									<div>
                    <div className="spacer"/>
										<div className='width-80-vw text-center mb-10'>
											<span className='h1 font-weight-bolder'>
											 Clientes
											</span>
											<p className='lead'>
                      Valorizamos e temos orgulho do relacionamento de confiança que desenvolvemos ao longo dos anos com nossos clientes. Esperamos trazer você também para fazer parte desse portfólio vencedor.
            
											</p>
										</div>
									</div>
								</div>
								
									
								
							</div>
						</div>
					</div>
				</section>
				{/*quarta seção*/}
				<section className='mt-5 pb-5'>
					<div className='width-80-vw text-left'>
            <Clients/>
					</div>
				</section>
				
        <PricingMessage
					message_title='Mãos a obra!'
					message='Venha conosco e será nossa missão ajudar sua Clientes a estruturar um projeto vencedor e entregá-lo pronto para trazer os resultados que tanto deseja.'
					first_button='Solicite um orçamento'
					first_button_link="/orcamento"
					second_button='Entre em contato'
					second_button_link="/contato"
					className='width-80-vw'
				/>
				<Footer />
			</>
		);
	}
}

export default Clientes;
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
  faPhone,
	faCat,
  faUserTie,
  faPenNib,
  faServer,
  faTasks,
  faMapMarker


} from '@fortawesome/free-solid-svg-icons';

import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import Clients from '../components/global/clients.js';
import Testimonials from '../components/global/testimonials.js';
import FAQ from '../components/global/faq.js';
import PricingMessage from '../components/global/pricing_message';
import Footer from '../components/global/footer';
import PricingButtonVar from '../components/global/pricing_button_var';

class Contato extends React.Component {

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
											 Contato
											</span>
											<p className='lead'>
                      Sua ideia já está estruturada? Faltam alguns pontos para definir? Quer saber mais sobre o mundo mobile? Entre em contato conosco!
            
											</p>
										</div>
									</div>
                
                
								</div>
                <hr className="my-5"/>
                <div className="row width-80-vw ">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                      <div class="section-preheading">Sede Cuiabá</div>
                      <a href="tel:5548991452528" className="color-primary custom-link">
                        <FontAwesomeIcon icon={faPhone}/> +55 (48) 99145-2528</a><br/><a className="color-primary custom-link" href="" target="_blank">
                        <FontAwesomeIcon icon={faMapMarker}/> Ver no mapa</a>
                    </div>
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                      <div class="section-preheading">Sede Cuiabá</div>
                      <a href="tel:5548991452528" className="color-primary custom-link">
                      <FontAwesomeIcon icon={faPhone}/> +55 (48) 99145-2528</a><br/><a className="color-primary custom-link" href="" target="_blank">
                      <FontAwesomeIcon icon={faMapMarker}/> Ver no mapa</a>
                    </div>
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                      <div class="section-preheading">Sede Cuiabá</div>
                      <a href="tel:5548991452528" className="color-primary custom-link">
                      <FontAwesomeIcon icon={faPhone}/> +55 (48) 99145-2528</a><br/><a className="color-primary custom-link" href="" target="_blank">
                      <FontAwesomeIcon icon={faMapMarker}/> Ver no mapa</a>
                    </div>
                  </div>
									
								
							</div>
						</div>
					</div>
				</section>
				
				
				<Footer />
			</>
		);
	}
}

export default Contato;
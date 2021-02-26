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

class TrabalheConosco extends React.Component {

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
											 Trabalhe Conosco
											</span>
											<p className='lead'>
                      Envie seu currículo para que nós possamos analisar
            
											</p>
										</div>
									</div>
                
                
								</div>
               </div>
						</div>
					</div>
				</section>
				<section>
        <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 pb-5 pt-5">
        <form role="form" enctype="multipart/form-data" accept-charset="UTF-8" method="post">

          



          <div className="form-group"><label className="text-dark required" for="job_application_name">Nome Completo</label>
          <input className="form-control py-4" placeholder="Insira seu nome completo" required="required" type="text" name="job_application[name]" id="job_application_name"/></div>

          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group"><label className="text-dark required" for="job_application_email">E-mail</label>
              <input className="form-control py-4" placeholder="nome@exemplo.com" required="required" type="text" name="job_application[email]" id="job_application_email"/></div>
            </div>
            <div className="col-md-6">
              <div className="form-group"><label className="text-dark required" for="job_application_phone">Telefone</label>
              <input className="form-control py-4" placeholder="(12)93456-7890" required="required" type="text" name="job_application[phone]" id="job_application_phone"/></div>
            </div>
          </div>

          <div>
            <label className="text-dark" for="job_application_areas">Escolha a área que você deseja se aplicar</label>

            <div className="form-group">
              <div className="form-check">
                <input name="job_application[areas][]" type="checkbox" value="ios" className="form-check-input"/>Desenvolvedor iOS
              </div>

              <div className="form-check">
                <input name="job_application[areas][]" type="checkbox" value="android" className="form-check-input"/>Desenvolvedor Android
              </div>

              <div className="form-check">
                <input name="job_application[areas][]" type="checkbox" value="web" className="form-check-input"/>Desenvolvedor Web
              </div>

              <div className="form-check">
                <input name="job_application[areas][]" type="checkbox" value="react-native" className="form-check-input"/>Desenvolvedor React Native
              </div>

              <div className="form-check">
                <input name="job_application[areas][]" type="checkbox" value="designer" className="form-check-input"/>Designer
              </div>

              <div className="form-check">
                <input name="job_application[areas][]" type="checkbox" value="comercial" className="form-check-input"/>Comercial
              </div>

              <div className="form-check form-check-inline">
                <input name="job_application[areas][]" type="checkbox" value="other" className="form-check-input"/>Outros
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="text-dark required">Envie seu currículo</label>
            <div className="form-group"><label className="sr-only required" for="job_application_curriculum">Currículo</label><div className="custom-file">
              <input accept=".pdf" className="custom-file-input form-control-file" required="required" type="file" name="job_application[curriculum]" id="job_application_curriculum"/>
              <label className="custom-file-label" for="job_application_curriculum">Choose file</label></div></div>
          </div>

          <div className="text-center">
            <button className="background-primary rounded btn text-white font-weight-bold" style={{width: '20%', minWidth: '200px'}} type="submit">Enviar</button>
          </div>
</form>      </div>
    </div>
  </div>
        </section>
				
				<Footer />
			</>
		);
	}
}

export default TrabalheConosco;
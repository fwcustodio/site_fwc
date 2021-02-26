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
  faTasks,
  faArrowRight


} from '@fortawesome/free-solid-svg-icons';

import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import PortfolioCards from '../components/global/portfolio_cards.js';
import Testimonials from '../components/global/testimonials.js';
import FAQ from '../components/global/faq.js';
import PricingMessage from '../components/global/pricing_message';
import Footer from '../components/global/footer';
import PricingButton from '../components/global/pricing_button';

class Orcamento extends React.Component {

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
			
        <PricingButton />
				{/*terceira seção*/}
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
										<div className='text-center mb-10'>
											<span className='h1 font-weight-bolder'>
												Orçamento de Aplicativo
											</span>
											<p className='lead'>
												Solicite um orçamento para o seu projeto.
                        
											</p>
										</div>
									</div>
								</div>
								
									
								
							</div>
						</div>
					</div>
				</section>
			
        <section className='mt-5 pb-5'>
					<div className='width-80-vw text-left text-center'>
            <h4 class="h4"><strong>Sobre seu projeto</strong></h4>
            <p>
            Nos conte o que deseja construir
            </p>
          </div>

          <form id="new_quote_contact_message" className="width-80-vw" accept-charset="UTF-8" method="post">
            
           


         
          <div class="optional" for="blog_post_published">Escolha para qual plataforma será desenvolvido seu aplicativo</div>
          <div class="form-row ml-1">
            
            

            <div class="form-group">
              <div class="form-check form-check-inline">
                <input name="contact_message[platforms][]" type="checkbox" value="ios" class="form-check-input"/>iOS
              </div>

              <div class="form-check form-check-inline">
                <input name="contact_message[platforms][]" type="checkbox" value="android" class="form-check-input"/>Android
              </div>

              <div class="form-check form-check-inline">
                <input name="contact_message[platforms][]" type="checkbox" value="web" class="form-check-input"/>Web
              </div>

              <div class="form-check form-check-inline">
                <input name="contact_message[platforms][]" type="checkbox" value="other" class="form-check-input"/>Outros
              </div>
            </div>
          </div>

          <div class="form-group"><label class="text-dark" for="contact_message_body">Sobre o aplicativo</label><textarea placeholder="Escreva mais detalhes do aplicativo e como ele deve funcionar..." rows="4" class="form-control" name="contact_message[body]" id="contact_message_body"></textarea></div>

          <div class="mt-5">
            <h2 class="text-center">Sobre você</h2>
            <p class="lead text-center mb-4">
              Para finalizar, envie-nos seus dados pessoais
            </p>
          </div>

          



          <input value="quote" type="hidden" name="contact_message[form_kind]" id="contact_message_form_kind"/>

          <div class="form-group"><label class="text-dark required" for="contact_message_name">Nome Completo</label><input class="form-control py-4" placeholder="Insira seu nome completo" required="required" type="text" name="contact_message[name]" id="contact_message_name"/></div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group"><label class="text-dark required" for="contact_message_email">E-mail</label><input class="form-control py-4" placeholder="nome@exemplo.com" required="required" type="text" name="contact_message[email]" id="contact_message_email"/></div>
            </div>
            <div class="col-md-6">
              <div class="form-group"><label class="text-dark optional" for="contact_message_phone">Telefone</label><input class="form-control py-4" placeholder="(12)93456-7890" type="text" name="contact_message[phone]" id="contact_message_phone" maxlength="15"/></div>
            </div>
          </div>

          <div class="form-group"><label class="text-dark" for="contact_message_person_kind">Você é Pessoa Física ou Jurídica?</label><select help="Selecione a categoria" class="form-control" name="contact_message[person_kind]" id="contact_message_person_kind"><option value="">Selecione</option>
<option value="legal">Pessoa Física</option>
<option value="juridical">Pessoa Jurídica</option></select></div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group"><label class="text-dark optional" for="contact_message_company">Empresa</label><input class="form-control py-4" placeholder="Insira sua empresa" type="text" name="contact_message[company]" id="contact_message_company"/></div>
            </div>
            <div class="col-md-6">
              <div class="form-group"><label class="text-dark optional" for="contact_message_city">Cidade</label><input class="form-control py-4" placeholder="Insira sua cidade" type="text" name="contact_message[city]" id="contact_message_city"/></div>
            </div>
          </div>
          <br></br>
          <div className="text-center">
            <button className="btn rounded background-primary text-light font-weight-bold" style={{width: '20%', minWidth: '200px'}}>Enviar <FontAwesomeIcon icon={faArrowRight}/></button>
          </div>

        

          
</form>
           
				
				</section>
       
				<Footer />
			</>
		);
	}
}

export default Orcamento;
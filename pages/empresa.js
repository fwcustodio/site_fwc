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
import PortfolioCards from '../components/global/portfolio_cards.js';
import Testimonials from '../components/global/testimonials.js';
import FAQ from '../components/global/faq.js';
import PricingMessage from '../components/global/pricing_message';
import Footer from '../components/global/footer';
import PricingButtonVar from '../components/global/pricing_button_var';

class Empresa extends React.Component {

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
										<div className='text-center mb-10'>
											<span className='h1 font-weight-bolder'>
												FWC
											</span>
											<p className='lead'>
                      Referência em desenvolvimento de aplicativos mobile
            
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
            
            <div>
              <h4 class="h4 "><strong>Quem somos</strong></h4>
              <p>
              Somos uma empresa especializada no desenvolvimento de aplicativos móveis nas plataformas iOS e Android.<br></br><br></br>

Criando soluções bem-sucedidas desde 2011, nos tornamos referência em tecnologia e inovação, com mais de <strong>350 aplicativos</strong> construídos para empresas de diferentes portes e segmentos, desde startups até grandes players do mercado.
<br></br><br></br>
Nosso foco é a Experiência do Usuário e nossa política de qualidade garante expertise técnica, eficiência dos produtos desenvolvidos e comprometimento com o atendimento das expectativas do cliente.
              </p>
              <hr></hr>
              <h4 class="h4 "><strong>Por que escolher a FWC?</strong></h4>
              <ul class="mb-0">
          <li>
            <b>NFC (Near Field Communication)</b>: Tecnologia que permite a troca de informações entre dispositivos wireless, sendo necessário apenas a aproximação física entre eles;
          </li>
          <li>
            <b>Fintech</b>: Startups que utilizam tecnologia de ponta para inovar na prestação de serviços de transações financeiras, como: saques, depósitos, cash-back, resgate, vouchers, entre outras operações;
          </li>
          <li><b>Mapas e Geo-Localização</b></li>
          <li><b>Indústrias da produção e transformação;</b></li>
          <li><b>E-commerce;</b></li>
          <li><b>Gestão/Contratação de serviços;</b></li>
          <li><b>Mobilidade urbana e logística.</b></li>
        </ul>
              <hr></hr>
              <h4 class="h4 "><strong>Filosofia de trabalho</strong></h4>
              <p>
              Junto com nosso cliente, desenhamos a solução ideal para atender as demandas do seu negócio. O aplicativo é implantado para trazer os resultados esperados e agregar valor ao negócio.<br></br><br></br>

Seja um projeto B2C ou B2B, MVP startup ou solução corporativa personalizada, iniciamos o projeto conhecendo o cliente, entendendo seu negócio, seu produto, os problemas que pretende resolver e as necessidades do usuário final.<br></br><br></br>

Nossos especialistas desenvolvem aplicativos móveis para iOS e Android, além de sistemas web, e estão comprometidos com a segurança, sigilo e garantia de qualidade, suporte e manutenção da aplicação.
              </p>
            
            </div>
					</div>
				</section>
				
        <PricingMessage
					message_title='Mãos a obra!'
					message='Venha conosco e será nossa missão ajudar sua empresa a estruturar um projeto vencedor e entregá-lo pronto para trazer os resultados que tanto deseja.'
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

export default Empresa;
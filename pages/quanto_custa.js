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

class QuantoCusta extends React.Component {

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
										<div className='text-center mb-10 p-2 p-md-0'>
											<span className='h1 font-weight-bolder'>
												Quanto custa criar um aplicativo?
											</span>
											<p className='lead'>
												Quando o assunto é desenvolvimento de aplicativos, somos especialistas.
                        <br>
                        </br>
                        Descubra aqui quanto custa criar um aplicativo:
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
					<div className='width-80-vw text-left p-0 p-md-5'>
            <h4 class="h4"><strong>Na Ponta do Lápis</strong></h4>
            <p>
            Construir um Aplicativo Mobile é uma tarefa complexa e o investimento necessário pode variar dependendo do tamanho do aplicativo, das tecnologias e plataformas escolhidas, das integrações e recursos que serão utilizados. 
            Também são necessárias várias pessoas com diferentes 
            habilidades, integração de diferentes serviços e processos 
            burocráticos.
            </p>
            <div className="row mt-5">
              <div className="col-md-2 h5 text-md-right text-left">
                <strong>de</strong>
                <br></br>
                R$ 60.000
                <br></br>
                <strong>a</strong>
                <br></br>
                R$ +160.000
              </div>
              <div className="col-md-10 h5">
              É quanto pode custar um aplicativo dependendo das funcionalidades exigidas.
              <br></br><a href="/orcamento" className="color-primary custom-link">Faça aqui uma estimativa </a> 
              específica para o seu app ou veja abaixo e entenda melhor os custos envolvidos neste investimento.
              </div>
            </div>
					</div>
				</section>
				<PricingMessage
					message_title='Quer construir o seu aplicativo?'
					message='Entre em contato pedindo uma estimativa!'
					first_button='Estimar o meu aplicativo'
					second_button=''
          first_button_link="/orcamento"
          second_button_link=""
          custom_classes="pt-5 pb-5"
					className=''
				/>
        <section className='mt-5 pb-5'>
					<div className='width-80-vw text-left  p-0 p-md-5'>
          <h4 class="h4"><strong>Investimento em desenvolvimento e infraestrutura</strong></h4>
          <p>
          Pode-se separar os custos de construir um aplicativo em duas grandes categorias: <strong>custo com equipe de desenvolvimento e custo com infraestrutura</strong>. Elas têm peso diferente dependendo do estágio de desenvolvimento ou produção do aplicativo.<br></br><br></br>

Os primeiros passos para transformar uma ideia de aplicativo mobile em realidade é a arquitetura e design. Nesta fase entram em cena: o <strong>gerente de produto</strong>, um <strong>designer</strong>criativo e um <strong>desenvolvedor </strong>experiente que estejam por dentro das tecnologias de ponta e tendências de usabilidade para arquitetar e definir uma base sólida onde todas as funções do aplicativo serão sustentadas.<br></br><br></br>

Na hora de codificar um aplicativo funcional e responsivo são necessários desenvolvedores que conheçam plenamente a linguagem da plataforma escolhida - <strong>Swift </strong>para iOS e <strong>Kotlin </strong>para Android. É muito provável que o aplicativo também necessite de um <strong>Back-end</strong>, onde os dados são salvos e integrados, onde são feitos os processamentos de pagamento, de login e armazenamento de imagens, por exemplo. Para isso, são necessários desenvolvedores especialistas em servidores, bancos de dados, APIs e linguages como <strong>Ruby, PHP, Node</strong>, etc.<br></br><br></br>

Ao construir tamanha infraestrutura é normal que detalhes possam ficar de fora e que bugs apareçam. Por isso uma equipe de <strong>QA</strong> ("Quality Assurance" ou Garantia da Qualidade) é fundamental. As equipes de testes conferem cada detalhe do sistema e asseguram que tudo esta funcionando como deveria.
          </p>
					</div>
				</section>
        <section
					style={{
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
												A Equipe
											</span>
										</div>
									</div>
								</div>
								<hr />
								<br />
								<div className='row no-gutters text-center'>
									<div className='col-lg mb-5 mb-lg-0'>
										<Fade left>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faUserTie} />
											</div>
										</Fade>
										<span className='h5 font-weight-bold'>P.O.</span>
                    <br></br>
										<p style={{fontSize: '85%'}}>
                      O <b>P</b>roduct <b>O</b>wner é quem <b>entende em detalhes</b> cada funcionalidade do seu projeto.
                      É o responsável por <b>documentar e coordenar</b> toda a construção do aplicativo.
                    </p>
									</div>
									<div className='col-lg mb-5 mb-lg-0'>
										<Fade bottom>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faPenNib} />
											</div>
										</Fade>
										<span className='h5 font-weight-bold'>Design</span>
                    <br></br>
										<p style={{fontSize: '85%'}}>
          Equipe especializada em <b>usabilidade</b> e na <b>experiência do usuário</b>. Eles transformam e dão identidade à sua ideia em um protótipo completo do seu aplicativo.
        </p>
									</div>
									<div className='col-lg mb-5 mb-lg-0'>
										<Fade right>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faApple} />
											</div>
										</Fade>
										<span className='h5 font-weight-bold'>iOS</span>
                    <br></br>
										<p style={{fontSize: '85%'}}>
          Equipe especialista na <b>plataforma da Apple</b>. Codificam o aplicativo utilizando as linguagens Swift e JavaScript (React Native)
        </p>
									</div>
                  <div className='col-lg mb-5 mb-lg-0'>
										<Fade right>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faAndroid} />
											</div>
										</Fade>
										<span className='h5 font-weight-bold'>Android</span>
										<br>
                    </br>
                    <p style={{fontSize: '85%'}}>
          Equipe especialista na <b>plataforma da Google</b>. Codificam o aplicativo utilizando as linguagens Kotlin e JavaScript (React Native)
        </p>
									</div>
                  <div className='col-lg mb-5 mb-lg-0'>
										<Fade right>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faServer} />
											</div>
										</Fade>
										<span className='h5 font-weight-bold'>Back-end</span>
										<br></br>
                    <p style={{fontSize: '85%'}}>
          Equipe dedicada na <b>API</b>, infra-estrutura de <b>servidores, banco de dados</b>, etc. São especialistas nas linguagens Ruby (on Rails), HTML, CSS e Javascript (React)
        </p>
									</div>
                  <div className='col-lg mb-5 mb-lg-0'>
										<Fade right>
											<div className='big-icon background-primary'>
												<FontAwesomeIcon icon={faTasks} />
											</div>
										</Fade>
										<span className='h5 font-weight-bold'>Q.A</span>
										<br></br>
                    <p style={{fontSize: '85%'}}>
          Equipe de Quality Assurance dedicada em testar o aplicativo e assegurar que <b>tudo está funcionando</b> como deveria.
        </p>
									</div>
								</div>
							</div>
						</div>
            <hr></hr>
          <div className="mx-auto text-center pb-5  px-2 p-md-5">
          A <b>FWC</b> conta com toda esta equipe pronta para construir o seu aplicativo.<br/><br></br>
          <a href="/orcamento"><button className="btn background-primary rounded-pill text-light font-weight-bold text-uppercase">Orçar meu aplicativo</button></a>
          </div>
					</div>
          
				</section>
        <section className='mt-5 pb-5'>
					<div className='width-80-vw text-left  p-0 p-md-5'>
            <h4 class="h4"><strong>Investimento em desenvolvimento e infraestrutura</strong></h4>
            <p>
            Construir um Aplicativo Mobile é uma tarefa complexa e o investimento necessário pode variar dependendo do tamanho do aplicativo, das tecnologias e plataformas escolhidas, das integrações e recursos que serão utilizados. 
            Também são necessárias várias pessoas com diferentes 
            habilidades, integração de diferentes serviços e processos 
            burocráticos.
            </p>
            <div>
            <p>
          Pode-se separar os custos de construir um aplicativo em duas grandes categorias: <b>custo com equipe de desenvolvimento</b> e <b>custo com infraestrutura</b>.
          Elas têm peso diferente dependendo do estágio de desenvolvimento ou produção do aplicativo.

          <br/>
          <br/>

          Os primeiros passos para transformar uma ideia de aplicativo mobile em realidade é a arquitetura e design.
          Nesta fase entram em cena: o <b>gerente de produto</b>, um <b>designer</b> criativo e um <b>desenvolvedor</b> experiente que estejam por dentro das tecnologias de ponta e tendências de usabilidade para arquitetar e definir uma base sólida onde todas as funções do aplicativo serão sustentadas.

          <br/>
          <br/>

          Na hora de codificar um aplicativo funcional e responsivo são necessários desenvolvedores que conheçam plenamente a linguagem da plataforma escolhida - <b>Swift</b> para iOS e <b>Kotlin</b> para Android.
          É muito provável que o aplicativo também necessite de um <b>Back-end</b>, onde os dados são salvos e integrados, onde são feitos os processamentos de pagamento, de login e armazenamento de imagens, por exemplo.
          Para isso, são necessários desenvolvedores especialistas em servidores, bancos de dados, APIs e linguages como <b>Ruby, PHP, Node</b>, etc.

          <br/>
          <br/>

          Ao construir tamanha infraestrutura é normal que detalhes possam ficar de fora e que bugs apareçam. Por isso uma equipe de <b>QA</b> ("Quality Assurance" ou Garantia da Qualidade) é fundamental. As equipes de testes conferem cada detalhe do sistema e asseguram que tudo esta funcionando como deveria.
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

export default QuantoCusta;
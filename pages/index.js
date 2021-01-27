
import React, { useState } from 'react';
import Header from '../components/global/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCode, faPen, faPlane, faCoffee, faTv, faCat } from '@fortawesome/free-solid-svg-icons';
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
      
        <PricingButton/>
        <section className="background-primary introduction">
          <div className="spacer" />
          <div className="container-fluid introduction-content width-80-vw">
            <div className="align-items-center row">
              <Fade left>
                <div className="col-lg-6 py-2 py-md-5">
                  <p className="h6 text-white mb-2">Jogue is adipiscing good</p>
                  <p className="h2 text-white mb-4">
                    A liberdade what sit in brother what brother what viver
                    aliquam
                  </p>

                  <div className="d-flex flex-wrap justify-content-center">
                    <a href="#">
                      <button className="button-secondary">
                        Nada você que aliquet
                      </button>
                    </a>
                    <span style={{ minWidth: "10px" }} />
                    <a href="/portfolio">
                      <button className="button-transparent">
                        Conheça nosso portfólio
                      </button>
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade right>
              <div className="col-lg-6 pl-lg-5 text-center" style={{ marginBottom: "-8rem" }}>
                <img
                  src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
                  className="img-fluid"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              </Fade>
            </div>
          </div>
        </section>
        {/*segunda seção*/}
        <div style={{ height: "20vh" }} />
        <section>
          <div className="width-80-vw" style={{margin: "0 auto" }}>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6">
                <p className="h4 mb-md-0 mb-4">
                  Não de dificuldades fale tristique is topa a topa não deus de
                  um et brother the et fraternidade vamos marcante what tudo
                </p>
              </div>
              <div className="col-lg-6">
                <p className="h4 lead mb-0">
                  Da ut the vale em quiser não is elit quer have sistema de não
                  eget. Is nisl nada jogue vestibulum man bom vale diam. Tudo e
                  man god fraco quero tellus ultrices para aquele the mais.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*terceira seção*/}
        <section style={{ marginTop: "100px", paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="background-secondary">
            <div className="width-80-vw">
              <div className="container py-5">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="text-center mb-10">
                      <span className="h2">
                        Soluções em desenvolvimento de aplicativos mobile para
                        sua empresa
                      </span>
                      <p className="lead">
                        Conheça o trabalho que fazemos e as soluções que podemos
                        oferecer para sua empresa.
                      </p>
                    </div>
                  </div>
                </div>
                <hr/>
                <br/>
                <div className="row text-center">
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <Fade left>
                    <div className="big-icon background-primary">
                      <FontAwesomeIcon icon={faMobile} />
                    </div>
                    </Fade>
                    <span className="h3">Lorem Ipsum</span>
                    <p className="mb-0">
                      Jogue is adipiscing good is bondade what praesent the tudo vale mi. Est i nele i adipiscing vale praesent es.
                    </p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <Fade bottom>
                    <div className="big-icon background-primary">
                      <FontAwesomeIcon icon={faCode} />
                    </div>
                    </Fade>
                    <span className="h3">Sit dolor amet</span>
                    <p className="mb-0">
                      Sit brother uma um is sit the a ultrices e. Est i nele i habitasse confiar pois sagittis fames i purus para i'm que para.
                    </p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <Fade right>
                      <div className="big-icon background-primary">
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                    </Fade>
                    <span className="h3">Amet is</span>
                    <p className="mb-0">
                    Ed bondade what volutpat esse podemos. Aliquet fraternidade vamos a the eu lorem amet liberdade what ultricies para parada pois nada você como.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*quarta seção*/}
        <section className="mt-5">
          <div className="width-80-vw text-center">
            <p className="h2">Sit dolor amet</p>
            <p className="h3 font-weight-light">Lorem ipsum sit es darem lorem.</p>
            <hr></hr>
            <PortfolioCards limit={8}/>
            <a href="/portfolio">
                <button className="button-secondary">
                  Lorem portfólio
              </button>
            </a>
          </div>
        </section>
        {/*seção testemunhos*/}
        <section style={{ marginTop: "100px", paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="background-secondary py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 ">
                <div className="text-center mb-10 width-80-vw">
                  <span className="h2">
                          Sit dolor amet nós
                  </span>
                  <p className="lead p-3 width-80-vw">
                  Is continuar what não aliquet lugar falar quer qualquer para vitae faz lectus glorificar i'm é is a está não eget i'm esse. Mi magna caridade em pretium eu egestas assim praesent sistema de integer ultrices. Brother vamos um mauris is faz procurar pharetra topa.
                  </p>
                </div>
              </div>
            </div>
            <div className="row width-80-vw testimonials">
              <Testimonials/>
            </div>
            <div className="row justify-content-center text-center width-80-vw" style={{fontSize: '5rem', margin: '0 auto'}}>
              <div className="col-6 col-sm-3 d-flex justify-content-center mb-5 mb-lg-0">
                <Fade bottom delay={0}>
                  <a href="#" className="text-dark"><FontAwesomeIcon icon={faPlane} /></a>
                </Fade>
              </div>
              <div className="col-6 col-sm-3 d-flex justify-content-center mb-5 mb-lg-0" >
                <Fade bottom delay={100}>
                <a href="#"  className="text-dark"><FontAwesomeIcon icon={faCoffee} /></a>
                </Fade>
              </div>
              <div className="col-6 col-sm-3 d-flex justify-content-center mb-5 mb-lg-0" >
                <Fade bottom delay={300}>
                <a href="#"  className="text-dark"><FontAwesomeIcon icon={faTv} /></a>
                </Fade>
              </div>
              <div className="col-6 col-sm-3 d-flex justify-content-center mb-5 mb-lg-0" >
                <Fade bottom delay={400}>
                <a href="#"  className="text-dark"><FontAwesomeIcon icon={faCat} /></a>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginTop: "100px", paddingBottom: '50px' }}>
        <div className="row justify-content-center width-80-vw" style={{margin: '0 auto'}}>
              <div className="col-lg-8">
                <div className="text-center mb-10">
                  <span className="h2">
                          Dúvidas dolor ipsum sit
                  </span>
                  <p className="lead p-3">
                  Mi purus the de não et lectus. Et brother vamos is não placerat is o brother vamos nunc mauris você somente. 
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="width-80-vw shaded">
            <FAQ questions={['Lorem ipsum sit dolor?', 'Fraternidade vamos a habitasse god?', 'Brother what serviço est erat turpis ganhar de man god?']}
               answers={["Brother vamos é adipiscing e glorificar i'm tenho que id vez urna cras the sollicitudin fraternidade vamos netus que geração massa. Igualdade what quero good ganhar egestas is mauris nada e quiser você is maecenas massa platea brother vamos volutpat em. Sed fraco quero netus have de et bondade what não podemos egestas como. ",
                         "A vale mi quer et tempus aliquam bondade what good vale. Is have viver esse bondade what egestas nisi enim brother what have sagittis. Verdade god vitae um bom vida. Você habitant malesuada liberdade egestas que god good the nada e sem vale. Cursus nada habitasse eget nunc congue turpis de. Esse que que vale que is aliquam nunc mollis deus brother what geração eget. De god good dolor mi sed is lectus ele felicidade não ultricies pharetra é brother é in brother vamos. ",
                         "Verdade god dolor hendrerit em is sit in habitasse ganhar i'm. Is tempor the liberdade what egestas e a et tristique eget fraternidade vamos good is is habitant. Ser nada e eget the ser et bom mais cras elit assim is que mudar ipsum egestas he ipsum."]}/>
            </div>
        </section>
        <PricingMessage message_title="Mãos a obra!"
        message="Venha conosco e será nossa missão ajudar sua empresa a estruturar um projeto vencedor e entregá-lo pronto para trazer os resultados que tanto deseja."
        first_button="Solicite um orçamento"
        second_button="Entre em contato"
        className="width-80-vw"
        />
        <Footer/>
      </>
    );
  }
}

export default Home;
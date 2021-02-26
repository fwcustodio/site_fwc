import { useEffect, useState } from 'react';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faEnvelope,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faLinkedin,
	faFacebook,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
	/*
   <a target='blank' href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
   */

	return (
		<>
			<span
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					minWidth: '100vw',
					zIndex: 2,
				}}
			>
				<div className='header-top background-primary-darker'>
					<div className='header-top-content  width-80-vw'>
						<div className='header-top-info'>
							<FontAwesomeIcon icon={faEnvelope} /> contato@fwctecnologia.com.br
							<FontAwesomeIcon icon={faPhone} style={{ marginLeft: '3vw' }} />
							(48) 999145-1528
							<FontAwesomeIcon icon={faPhone} style={{ marginLeft: '3vw' }} />
							(65) 999602-3999
						</div>
						<div className='header-top-social'>
							<a target='blank' href='https://www.instagram.com/fwctecnologia'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a target='blank' href='https://www.facebook.com/fwctecnologia'>
								<FontAwesomeIcon icon={faFacebook} />
							</a>

							<a
								target='blank'
								href='https://www.linkedin.com/company/fwc-tecnologia'
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
				</div>
				<div className="w-100 background-primary">
				<Navbar className='background-primary header2 width-80-vw pb-md-0' expand='lg'>
					<Navbar.Brand className='text-light' href='/'>
						<img src='/static/logo_fundo_vermelho.png' width='130' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link className='text-light' href='/'>
								Início
							</Nav.Link>
							<Nav.Link className='text-light' href='/portfolio'>
								Portfólio
							</Nav.Link>
							<Nav.Link className='text-light' href='/empresa'>
								Empresa
							</Nav.Link>
							<Nav.Link className='text-light' href='/clientes'>
								Clientes
							</Nav.Link>
						</Nav>
						<a href='/orcamento'>
							<button className='ml-0 ml-md-5 mb-2 mb-md-0 button-secondary font-weight-bolder color-primary'>
								Orçamento <FontAwesomeIcon icon={faArrowRight} />
							</button>
						</a>
					</Navbar.Collapse>
				</Navbar>
				</div>
			</span>
		</>
	);
};

export default Header;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<div>
			<footer className='footer pt-10 p-5 mt-auto bg-dark text-light'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='footer-brand'>FWC Tecnologia Mobile Apps</div>
							<div className='mb-5'>
								Empresa especializada no desenvolvimento de aplicativos mobile
								nas plataformas iOS e Android.
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-3'>
							<div className='text-xs mb-4'>Localização</div>
							<span className='mb-4'>
								<p className='pb-1 mb-0'>Sede Cuiabá</p>
								<p className='text-xs mb-0 pb-0'>Av. das Palmeiras, 20</p>
								<p className='text-xs mb-0 pb-0'>780758-850 - Cuiabá</p>
								<p className='text-xs mb-0 pb-0'>Cuiabá, Brasil</p>
								<p className='text-xs mb-0 pb-0'>Tel. +55 (48) 99145-2528</p>
								<a
									className='text-xs btn btn-link pl-0 text-white'
									href='https://www.google.com/maps/dir/-15.600388,-56.0361476/fwctecnologia/@-15.6042785,-56.0386604,15z'
									target='_blank'
								>
									<FontAwesomeIcon icon={faLocationArrow} /> Ver no mapa
								</a>
							</span>
						</div>
						<div className='col-lg-9'>
							<div className='row'>
								<div className='col-lg-3 col-md-6 mb-5 mb-lg-0'>
									<div className='text-xs mb-4'>Institucional</div>
									<ul className='list-unstyled mb-0'>
										<li className='mb-2'>
											<a className='text-white' href='#'>
												A Empresa
											</a>
										</li>
										<li className='mb-2'>
											<a className='text-white' href='#'>
												Portifólio
											</a>
										</li>
										<li>
											<a href='#' className='text-white'>
												Clientes
											</a>
										</li>
									</ul>
								</div>
								<div className='col-lg-3 col-md-6 mb-5 mb-lg-0'>
									<div className='text-xs mb-4'>Projetos</div>
									<ul className='list-unstyled mb-0'>
										<li className='mb-2'>
											<a className='text-white' href='/portfolio'>
												Android
											</a>
										</li>
										<li className='mb-2'>
											<a className='text-white' href='/portfolio'>
												Apple
											</a>
										</li>
										<li className='mb-2'>
											<a className='text-white' href='/portfolio'>
												Protótipos
											</a>
										</li>
									</ul>
								</div>

								<div className='col-lg-3 col-md-6'>
									<div className='text-xs mb-4'>Contato</div>
									<ul className='list-unstyled mb-0'>
										<li className='mb-2'>
											<a className='text-white' href='#'>
												Quanto Custa Criar um App?
											</a>
										</li>
										<li className='mb-2'>
											<a className='text-white' href='#'>
												Orçamento
											</a>
										</li>
										<li className='mb-2'>
											<a className='text-white' href='#'>
												Entre em Contato
											</a>
										</li>
										<li className='mb-2'>
											<a className='text-white' href='#'>
												Trabalhe conosco
											</a>
										</li>
									</ul>
									<div className='icon-list-social'></div>
								</div>
							</div>
						</div>
					</div>
					<hr className='my-5' />
					<div className='row align-items-center'>
						<div className='col-md-6 small'>
							Copyright © FWC Tecnologia 2021
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

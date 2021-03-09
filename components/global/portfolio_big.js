import { useEffect, useState } from 'react';
const axios = require('axios');
import Fade from 'react-reveal/Fade';
import { getProjetosCasoEstudo } from '../../servicos';

const PortfolioBig = (props) => {
	const [portfolio_list, setPortfolioList] = useState();

	useEffect(() => {
		const funcAuxiliar = async () => {
			let portfolio_listAux = await getProjetosCasoEstudo();

			console.log('portfolio_listAux : ' + JSON.stringify(portfolio_listAux));
			setPortfolioList(portfolio_listAux);
		};

		funcAuxiliar();
	}, []);

	return (
		<>
			{portfolio_list &&
				portfolio_list.map((item, index) => (
					<>
						{index % 2 == 0 ? (
							<Fade left>
								<div className='card mb-5' style={{ marginTop: 25 }}>
									<div className='row no-gutters'>
										<div
											className='col-md-6 order-md-0'
											style={{ minHeight: 100 }}
										>
											<a href={'/portfolio_details?id=' + item.id}>
												<img
													className='img-fluid w-100'
													src={item.banner}
													style={{ height: '100%', minHeight: 100 }}
												/>
											</a>
										</div>
										<div className='col-md-6 order-md-1'>
											<div
												className='card-body  text-light d-flex align-items-center justify-content-center h-100 flex-column'
												style={{ marginLeft: 'auto', marginRight: 'auto' }}
											>
												<p
													className='h3 card-title font-weight-bold text-uppercase text-left mb-2'
													style={{
														fontSize: 20,
														color: 'black',
														textAlign: 'center',
													}}
												>
													{item.nome}
												</p>
												<p
													className='card-text font-weight-light text-center mb-4'
													style={{
														marginTop: 5,
														marginBottom: 30,
														fontSize: 17,
														textAlign: 'center',
														color: '#687281',
													}}
												>
													{item.caso_estudo_descricao}
												</p>
												<a
													className='text-dark'
													href={'/portfolio_details?id=' + item.id}
												>
													<button
														className='button-secondary'
														style={{ textTransform: 'uppercase' }}
													>
														Ver Caso de Estudo
													</button>
												</a>
											</div>
										</div>
									</div>
								</div>
							</Fade>
						) : (
							<Fade right>
								<div className='card mb-5' style={{}}>
									<div className='row no-gutters'>
										<div
											className='col-md-6 order-md-1'
											style={{ minHeight: 100 }}
										>
											<a href={'/portfolio_details?id=' + item.id}>
												<img
													className='img-fluid w-100'
													src={item.banner}
													style={{ minHeight: 100 }}
												/>
											</a>{' '}
										</div>
										<div className='col-md-6 order-md-0'>
											<div className='card-body text-light d-flex align-items-center justify-content-center h-100 flex-column'>
												<p
													className='h3 card-title font-weight-bold text-uppercase text-left mb-2'
													style={{
														fontSize: 20,
														color: 'black',
														textAlign: 'center',
													}}
												>
													{item.nome}
												</p>
												<p
													className='card-text font-weight-light text-center mb-4'
													style={{
														marginTop: 5,
														marginBottom: 30,
														fontSize: 17,
														textAlign: 'center',
														color: '#687281',
													}}
												>
													{item.caso_estudo_descricao}
												</p>
												<a
													className='text-dark'
													href={'/portfolio_details?id=' + item.id}
												>
													<button className='button-secondary'>
														Ver Caso de Estudo
													</button>
												</a>
											</div>
										</div>
									</div>
								</div>
							</Fade>
						)}
					</>
				))}
		</>
	);
};

export default PortfolioBig;

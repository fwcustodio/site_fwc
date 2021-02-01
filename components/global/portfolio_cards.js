import { useEffect, useState } from 'react';
const axios = require('axios');
import Fade from 'react-reveal/Fade';
import ImagemDemo from '../../assets/demo.jpg';

const PortfolioCards = (props) => {
	const [portfolio_list, setPortfolioList] = useState();
	const { Completo } = props;

	useEffect(() => {
		let ItensPortifolio = [
			[
				{ id: 1, title: 'App da Renda', image: ImagemDemo },
				{ id: 2, title: 'Mais Chopp', image: ImagemDemo },
				{ id: 3, title: 'Goout', image: ImagemDemo },
				{ id: 4, title: 'Calculadora de Óleos Essenciais', image: ImagemDemo },
			],
			[
				{ id: 5, title: 'AgroInsight', image: ImagemDemo },
				{ id: 6, title: 'Solvace', image: ImagemDemo },
				{ id: 7, title: 'Cota Ai', image: ImagemDemo },
				{ id: 8, title: 'PalmLav', image: ImagemDemo },
			],
			[
				{ id: 9, title: 'Arara Digital', image: ImagemDemo },
				{ id: 10, title: 'Pato Delivery', image: ImagemDemo },
				{ id: 11, title: 'Dealer MS', image: ImagemDemo },
				{ id: 12, title: 'SCFootbal', image: ImagemDemo },
			],
		];

		if (Completo) {
			ItensPortifolio = [
				...ItensPortifolio,
				[{ id: 13, title: 'Campinas Friendly', image: ImagemDemo }],
			];
		}

		setPortfolioList(ItensPortifolio);
	}, []);

	return (
		<>
			{portfolio_list &&
				portfolio_list.map((arr, index) => (
					<div className='row justify-content-center'>
						{arr.map((item, index) => (
							<Fade bottom delay={index * 100}>
								<div
									key={index}
									className='col-lg-6 col-md-12 mb-6 custom-card'
								>
									<a
										href={'/portfolio_details?id=' + item.id}
										className='text-dark'
									>
										<img
											width='100%'
											src={item.image}
											style={{
												borderTopRightRadius: '10px',
												borderTopLeftRadius: '10px',
											}}
										/>
										<div className='card-body text-center py-3'>
											<p
												className='card-title h6 mb-0'
												style={{ fontWeight: 'bold' }}
											>
												{item.title}
											</p>
										</div>
									</a>
								</div>
							</Fade>
						))}
					</div>
				))}
		</>
	);
};

export default PortfolioCards;

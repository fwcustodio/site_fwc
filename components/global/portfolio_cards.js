import { useEffect, useState } from 'react';
const axios = require('axios');
import Fade from 'react-reveal/Fade';
import ImagemDemo from '../../assets/demo.jpg';
import { getProjetos, getProjetosHome } from '../../servicos';

const PortfolioCards = (props) => {
	const [portfolio_list, setPortfolioList] = useState();
	const { Completo } = props;

	useEffect(() => {
		const carregarDados = async () => {
			let Projetos;

			if (Completo) {
				Projetos = await getProjetos();
				//console.log('Completo');
			} else {
				Projetos = await getProjetosHome();
				//console.log('Home');
			}

			console.log('Projetos : ' + JSON.stringify(Projetos));

			if (Projetos && Projetos.data) {
				let ProjetosAgrupados = [];
				let ArrayInterno = [];

				for (let index = 0; index < Projetos.data.length; index++) {
					const ProjetoAux = Projetos.data[index];

					ArrayInterno.push(ProjetoAux);

					if ((index + 1) % 4 == 0 && index != 0) {
						ProjetosAgrupados.push(ArrayInterno);
						ArrayInterno = [];
					}
				}

				if (ArrayInterno.length > 0) {
					ProjetosAgrupados.push(ArrayInterno);
				}

				setPortfolioList(ProjetosAgrupados);
			}
		};

		carregarDados();
	}, []);

	return (
		<>
			{portfolio_list &&
				portfolio_list.map((arr, index) => (
					<div
						className='row justify-content-center'
						style={{ marginTop: 50, marginBottom: 50 }}
					>
						{arr.map((item, index) => (
							<Fade bottom delay={index * 100}>
								<div key={index} className='col-md  mb-6 custom-card'>
									<a
										href={'/portfolio_details?id=' + item.id}
										className='text-dark'
									>
										<img
											width='100%'
											src={item.banner_pequeno}
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
												{item.nome}
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

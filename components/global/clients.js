import { useEffect, useState } from 'react';
const axios = require('axios');
import Fade from 'react-reveal/Fade';
import ImagemDemo from '../../assets/demo.jpg';
import { getClientes } from '../../servicos';

const Clients = (props) => {
	const [portfolio_list, setPortfolioList] = useState();
	const { Completo } = props;

	useEffect(() => {
		const carregarDados = async () => {
			let Clientes;

			Clientes = await getClientes();

			console.log('Clientes : ' + JSON.stringify(Clientes));

			if (Clientes && Clientes.data) {
				let ClientesAgrupados = [];
				let ArrayInterno = [];

				for (let index = 0; index < Clientes.data.length; index++) {
					const ProjetoAux = Clientes.data[index];

					ArrayInterno.push(ProjetoAux);

					if ((index + 1) % 4 == 0 && index != 0) {
						ClientesAgrupados.push(ArrayInterno);
						ArrayInterno = [];
					}
				}

				if (ArrayInterno.length > 0) {
					ClientesAgrupados.push(ArrayInterno);
				}

				setPortfolioList(ClientesAgrupados);
			}
		};

		carregarDados();
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
									className='col-md  p-2 ml-2 mr-2'
								>
									
										<img
											width='100%'
											src={item}
											style={{
											
											}}
										/>
										
								</div>
							</Fade>
						))}
					</div>
				))}
		</>
	);
};

export default Clients;

import { useEffect, useState } from 'react';
const axios = require('axios');
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Testimonials = (props) => {
	//axios.get('https://run.mocky.io/v3/002ffd4a-1249-4efa-b17d-1ec4cd8e1305').then(res => {   setTestimonials(res.data);  })
	const testimonials = [
		{
			comment:
				'Conhecemos a FWC em uma busca por ajuda para portar nosso app em Flutter para o ambiente iOS. Nosso time estava sobrecarregado e tinhamos pouca experiência com esse ambiente. Após uma troca de informações inicial, que foi conduzida de forma muito eficiente para compreender o nosso cenário, desenvolveram a solução e nos auxiliaram em todo o processo. Recomendamos fortemente.',
			name: 'Fábio Caldeira ',
			works_at: 'Efeso Consulting',
			avatar:
				'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
		},
		{
			comment:
				'Desenvolvemos projetos anteriormente na área de aplicativos, e a FWC possue alguns diferenciais, como um forte compromisso com o que é acordado e grande rapidez na resposta aos problemas que possam ocorrer ao longo do projeto. Recomendamos demais o trabalho da FWC Tecnologia. ',
			name: 'Glauber Lima ',
			works_at: 'Buy Care Corretora',
			avatar:
				'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
		},
	];
	return (
		<>
			{testimonials &&
				testimonials.map((item, key) => (
					<div className='col-lg-6 mb-5' key={key}>
						<div className='testimonial p-lg-5 text-center'>
							<Fade bottom>
								<p className='testimonial-quote h5'>{`"${item.comment}"`}</p>
							</Fade>
							<Fade top>
								<div className='d-flex justify-content-center font-weight-light'>
									<img
										alt={item.name + ' avatar'}
										className='rounded-circle mx-2'
										width={50}
										height={50}
										src={item.avatar}
									/>
									<div>
										<div className='font-weight-bold'>{item.name}</div>
										<div className='testimonial-position'>{item.works_at}</div>
									</div>
								</div>
							</Fade>
						</div>
					</div>
				))}
		</>
	);
};

export default Testimonials;

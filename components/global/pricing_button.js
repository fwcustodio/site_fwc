import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

const PricingButton = () => {
	return (
		<div
			className='btn-fixed-effect'
			style={{
				boxShadow:
					'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important',
				borderRadius: '10px',
			}}
		>
			<a
				class='text-white background-primary fixed-bottom shadow-sm p-0 mb-2 d-flex align-items-center'
				style={{
					bottom: '10px',
					right: '4%',
					left: 'auto',
					textDecoration: 'none',
					minWidth: '300px',
					boxShadow:
						'0 5px 5px 0 rgba(0,0,0,0.2),0 5px 5px 0 rgba(0,0,0,0.19) !important;',
					borderRadius: '10px',
					paddingRight: '5px',
					paddingLeft: '5px',
				}}
				href='/quanto_custa'
			>
				<div class='p-3  rounded-left background-primary-darker'>
					<FontAwesomeIcon icon={faCalculator} />
				</div>
				<span
					class='p-2 px-3 flex-fill'
					style={{
						textTransform: 'uppercase',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Quanto Custa Criar Um Aplicativo?
				</span>
			</a>
		</div>
	);
};

export default PricingButton;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';



const PricingButton = () => {
  return (
    <div className="btn-fixed-effect" >
    <a  class="text-white background-primary fixed-bottom shadow-sm p-0 mb-2 d-flex align-items-center" style={{bottom: '10px', right: '4%', left: 'auto', textDecoration: 'none'}} href="#">
  <div class="p-3  rounded-left background-primary-darker">
    <FontAwesomeIcon icon={faCalculator}/>
  </div>
  <span class="p-2 px-3 flex-fill">Quanto Custa Criar Um Aplicativo?</span>
</a></div>
  )
}

export default PricingButton;


import { useEffect, useState } from "react";
const axios = require('axios');
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Testimonials = (props) => {

  const [testimonials, setTestimonials] = useState([]);

  axios.get('https://run.mocky.io/v3/002ffd4a-1249-4efa-b17d-1ec4cd8e1305').then(res => {
    setTestimonials(res.data);
  })

  return (
    <>
    {testimonials.map((item, key) => 
     
      <div className="col-lg-6 mb-5" key={key}>
      <div className="testimonial p-lg-5 text-center">
        <Fade bottom>
          <p className="testimonial-quote h5">
            {`"${item.comment}"`}
          </p>
        </Fade>
        <Fade top>
        <div className="d-flex justify-content-center font-weight-light">
          <img alt={item.name + ' avatar'} className="rounded-circle mx-2" width={50} height={50} src={item.avatar}/>
          <div>
            <div className="font-weight-bold">{item.name}</div>
            <div className="testimonial-position">{item.works_at}</div>
          </div>
        </div>
      </Fade>
      </div>
    </div>
    )}
    </>
   
  );
};

export default Testimonials;

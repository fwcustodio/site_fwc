
import { useEffect, useState } from "react";
const axios = require('axios');
import Fade from 'react-reveal/Fade';

const PortfolioCards = (props) => {

  const [portfolio_list, setPortfolioList] = useState([]);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/876c569c-4fd3-4a76-854c-d37d23d63592').then(res => {
    let limit = typeof props.limit == 'undefined' ? res.data.length : props.limit;
    let start = typeof props.start == 'undefined' ? 0 : props.start

    let new_list = [];

    res.data = res.data.slice(start, limit);

    for (let i = 0; i < res.data.length; i++) {
        if(i % 4 == 0) {
          new_list.push([]);
        }
        new_list[new_list.length - 1].push(res.data[i]);
    }
   
    setPortfolioList(new_list);
  })
  }, []);

  return (
    <>
      {portfolio_list.map((arr, index) => 
      <div className="row justify-content-center">
        {arr.map((item, index) => 
        <Fade bottom delay={index * 100}>
          <div key={index} className="col-lg-6 col-md-12 mb-6 custom-card">
        <a href={"/portfolio_details?id=" + item.id} className="text-dark">
          <img width="100%"  src={item.image} style={{borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}/>
          <div className="card-body text-center py-3">
            <p className="card-title h6 mb-0">
              {item.title}
            </p>
          </div>
        </a>    
      </div>
        </Fade>)}
      </div>
      )
    }
    </>
  );
};

export default PortfolioCards;

import { useEffect, useState } from "react";
const axios = require("axios");
import Fade from "react-reveal/Fade";

const PortfolioBig = (props) => {
  const [portfolio_list, setPortfolioList] = useState([]);

  useEffect(() => {
    axios
    .get("https://run.mocky.io/v3/7e752746-5ccc-4601-abbe-24078e3190f9")
    .then((res) => {
      let limit =
        typeof props.limit == "undefined" ? res.data.length : props.limit;
      let start = typeof props.start == "undefined" ? 0 : props.start;

      res.data = res.data.slice(start, limit);

      setPortfolioList(res.data);
    });
  }, []);

  return (
    <>
      {portfolio_list.map((item, index) => (
        <>
          {index % 2 == 0 ? (
            <Fade left>
            <div
              className="card mb-5"     
            >
              <div className="row no-gutters">
                <div className="col-md-6 order-md-0">
                  <a href={"/portfolio_details?id=" + item.id}>
                    <img
                      className="img-fluid w-100"
                      src={item.image}
                    />
                  </a>
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="card-body background-primary text-light d-flex align-items-center justify-content-center h-100 flex-column">
                    <p className="h3 card-title font-weight-bold text-uppercase text-left mb-2">
                      {item.title}
                    </p>
                    <p className="card-text font-weight-light text-center mb-4">
                      {item.description}
                    </p>
                    <a
                      className="text-dark"
                      href={"/portfolio_details?id=" + item.id}
                    >
                      <button className="button-secondary">
                        Saiba mais
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </Fade>
          ) : (
            <Fade right>
            <div
              className="card mb-5"
            >
              <div className="row no-gutters">
                <div className="col-md-6 order-md-1">
                  <a href={"/portfolio_details?id=" + item.id}>
                    <img
                      className="img-fluid w-100"
                      src={item.image}
                    />
                  </a>{" "}
                </div>
                <div className="col-md-6 order-md-0">
                  <div className="card-body background-primary text-light d-flex align-items-center justify-content-center h-100 flex-column">
                    <p className="h3 card-title font-weight-bold text-uppercase text-left mb-2">
                      {item.name}
                    </p>
                    <p className="card-text font-weight-light text-center mb-4">
                      {item.description}
                    </p>
                    <a
                      className="text-dark"
                      href={"/portfolio_details?id=" + item.id}
                    >
                      <button className="button-secondary">
                        Saiba mais
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

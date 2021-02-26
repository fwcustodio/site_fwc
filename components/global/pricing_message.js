const PricingMessage = (props) => {
  return (
    <section className="background-primary">
      <div className="container-fluid width-80-vw text-center text-md-left p-0 p-md-5 pt-5 pb-5">
        <div className={"row align-items-center " + props.custom_classes}>
          <div className="col-lg-6">
            <p className="h3 text-white">{props.message_title}</p>
            <p className="lead mb-5 mb-lg-0 text-white">
              {props.message}
            </p>
          </div>
          <div className="col-lg-6 text-lg-right">
            <a href={props.first_button_link}>
              <button className="button-secondary">
                {props.first_button}
              </button>
            </a>
            <a href={props.second_button_link}>
              <button className="button-transparent">
                {props.second_button}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingMessage;
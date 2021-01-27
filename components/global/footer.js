import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
    <footer className="footer pt-10 p-5 mt-auto bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-brand">Workana</div>
            <div className="mb-5">Lorem ipsum Android amet sit iOS.</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="text-xs mb-4">Localização</div>
            <span className="mb-4">
              <p className="pb-1 mb-0">Example 1</p>
              <p className="text-xs mb-0 pb-0">Rua A, 35 - Bairro A</p>
              <p className="text-xs mb-0 pb-0">000000-000 - Cidade A</p>
              <p className="text-xs mb-0 pb-0">Cidade A, Brasil</p>
              <p className="text-xs mb-0 pb-0">Tel. +55 (12) 3456-7890</p>
              <a className="text-xs btn btn-link pl-0 text-white" href="#" target="_blank">
              <FontAwesomeIcon icon={faLocationArrow}/> Ver no mapa </a>
            </span>
            <span className="mb-4">
            <p className="pb-1 mb-0">Example 2</p>
              <p className="text-xs mb-0 pb-0">Rua B, 35 - Bairro B</p>
              <p className="text-xs mb-0 pb-0">100000-000 - Cidade B</p>
              <p className="text-xs mb-0 pb-0">Cidade B, Brasil</p>
              <p className="text-xs mb-0 pb-0">Tel. +55 (12) 3456-7890</p>
              <a className="text-xs btn btn-link pl-0 text-white" href="#" target="_blank">
                <FontAwesomeIcon icon={faLocationArrow}/> Ver no mapa </a>
            </span>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="text-xs mb-4">Institucional</div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><a  className="text-white" href="#">Lorem</a></li>
                  <li className="mb-2"><a  className="text-white" href="#">Ipsum</a></li>
                  <li><a href="#" className="text-white">Dolor</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="text-xs mb-4">Projetos</div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a className="text-white" href="/portfolio">Lorem Android</a>
                  </li>
                  <li className="mb-2">
                    <a className="text-white" href="/portfolio">Sit Apple</a>
                  </li>
                  <li className="mb-2">
                    <a className="text-white" href="/portfolio">Dolor Design</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="text-uppercase text-xs mb-4">Blog</div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a className="text-white" href="/category/android">Dolor Android</a>
                  </li>
                  <li className="mb-2">
                    <a className="text-white"href="/category/ios">Sit iOS</a>
                  </li>
                  <li className="mb-2">
                    <a className="text-white"href="/category/aplicativos">Amet Aplicativos</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="text-xs mb-4">Contato</div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><a className="text-white" href="#">Lorem?</a></li>
                  <li className="mb-2"><a className="text-white" href="#">Ipsum</a></li>
                  <li className="mb-2"><a className="text-white" href="#">Sit dolor</a></li>
                  <li className="mb-2"><a className="text-white"href="#">Amet</a></li>
                </ul>
                <div className="icon-list-social">
               </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5"/>
        <div className="row align-items-center">
          <div className="col-md-6 small">Workana 2021</div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer;

import { useEffect, useState } from "react";
import { Button, Navbar, Nav, Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

  return (
    <>
      <span style={{ position: "fixed", top: 0, left: 0, minWidth: "100vw", zIndex: 2}}>
        <div className="header-top background-primary-darker">
          <div className="header-top-content">
            <div className="header-top-info">
              <FontAwesomeIcon icon={faEnvelope} /> contato@example.com.br
              <FontAwesomeIcon
                icon={faPhone}
                style={{ marginLeft: "3vw" }}
              />{" "}
              (11) 1234-5678
              <FontAwesomeIcon
                icon={faPhone}
                style={{ marginLeft: "3vw" }}
              />{" "}
              (11) 9876-54321
            </div>
            <div className="header-top-social">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <Navbar className="background-primary header" expand="lg">
          <Navbar.Brand className="text-light" href="#home">
            <img src="/static/logo.png" width="200" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-light" href="/">
                Início
              </Nav.Link>
              <Nav.Link className="text-light" href="/portfolio">
                Portfólio
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                Lorem
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                Ipsum
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                Dolor
              </Nav.Link>
            </Nav>
            <a href="#link" className="">
              <button className="pricing-button color-primary">
                Orçamento <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </Navbar.Collapse>
        </Navbar>
      </span>
    </>
  );
};

export default Header;

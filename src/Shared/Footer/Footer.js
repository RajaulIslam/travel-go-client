import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import ssl from "../../images/ssl.webp";
const Footer = () => {
    return (
        <div className="text-white">
        <div className="py-4 gradient">
          <Container>
            <Row>
              <Col md={6}>
                
                <ul className="list-unstyled mt-5">
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span className="ms-1 fs-5">Dhanmondi,Dhaka,Bangladesh</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="ms-1 fs-5">
                      Official: osuddokan@gmail.com
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="ms-1 fs-5">
                      Helpline: 001121445187(Available:10:00AM to 10.00PM)
                    </span>
                  </li>
                </ul>
              </Col>
              <Col md={2}>
                <ul className="list-unstyled footer-link">
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About us</NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Policy</NavLink>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <div className="">
                  <img
                    className="img-fluid"
                    src={ssl}
                    alt="payment methods"
                  />
                  
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="m-0 p-0" />
        <p className="text-center m-0 py-3 copyright">
          Copyright © All Reserved by Travel Go in
          2021
        </p>
      </div>
    );
};

export default Footer;
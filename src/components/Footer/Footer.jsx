import React from "react";
import "./footer.css";
// import logo from "../../assets/images/logoTienda.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md='6'>
            <div >
              <div>
                <h1 className="tittle-footer-dark">E-DarkStore</h1>
              </div>
            </div>
            <p className="footer__text mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptas quas voluptates quibusdam.
            </p>
          </Col>
          <Col lg="3" md='3' className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-tittle">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Hamburgers</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Hot Dogs</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Drinks</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Pizza</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md='3' className="mb-4">
          <div className="footer__quick-links">
              <h4 className="quick__links-tittle">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md='4' >
          <div className="footer__quick-links">
              <h4 className="quick__links-tittle">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>123, street fake, Colombia</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap">
                <span><i class="ri-phone-line"></i></span>
                  <p>+57 3128598222</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap">
                <span><i class="ri-mail-line"></i></span>
                  <p>prueba@hotmail.com</p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
          <p className="footer__copyright"> Copyright {year} developer by E-DarkStore Team. All rights reserved.</p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { toast} from "react-toastify";

import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {

  const totalQty = useSelector((state) => state.cart.totalQuantity)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  const endBuy = () => {toast.success('Thank you for your purchase, we will send you an email.')}
  

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Details</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal CODE" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                
                    Shipping: <br /> Free Shipping
                  </span>
                  <span>$0</span>
                </h6>

                <h4>
                  Total Cost:<span>${totalAmount}</span>
                </h4>
                

              </div>

              <button className="buy__btn auth__btn"  onClick={endBuy}> Place an order</button>
            </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

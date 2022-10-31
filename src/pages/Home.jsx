import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";


import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/portada.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/logoTienda.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestPricesProducts, setBestPricesProducts] = useState([]);
  const [hotdogProducts, setHotdogProducts] = useState([]);
  const [drinksProducts, setDrinksProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "hamburger"
    );
    const filteredBestPricesProducts = products.filter(
      (item) => item.category === "pizza"
    );
    const filteredHotdogProducts = products.filter(
      (item) => item.category === "hotdog"
    );
    const filteredDrinksProducts = products.filter(
      (item) => item.category === "drinks"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "hamburger"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestPricesProducts(filteredBestPricesProducts);
    setHotdogProducts(filteredHotdogProducts);
    setDrinksProducts(filteredDrinksProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">All you can eat in {year}</p>
                <h2>Fast food and healthy food for your family and friends</h2>
                <p>
                  Lorem ipsum dolor sit Officia qui aliqua veniam est deserunt
                  do. Fugiat non irure ipsum dolor reprehenderit reprehenderit.
                  Non dolore nisi sit nostrud labore do sunt do anim nisi. Lorem
                  ipsum dolor sit Officia qui aliqua veniam est deserunt do.
                  Fugiat non irure ipsum dolor reprehenderit reprehenderit. Non
                  dolore nisi sit nostrud labore do sunt do anim nisi. Lorem
                  ipsum dolor sit Officia qui aliqua veniam est deserunt do.
                  Fugiat non irure ipsum dolor reprehenderit reprehenderit. Non
                  dolore nisi sit nostrud labore do sunt do anim nisi.{" "}
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Order Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__section">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__tittle">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_prices">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__tittle">Best Prices</h2>
            </Col>

            <ProductsList data={bestPricesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mn-3">Quality Hamburger</h3>
              </div>

              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                {" "}
                <Link to="/shop">Order your favorite food now</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="timer" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__tittle tittle__arrivals">New Arrivals</h2>
            </Col>

            <ProductsList data={hotdogProducts} />
            <ProductsList data={drinksProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__tittle">Popular in Category</h2>
            </Col>

            <ProductsList data={popularProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

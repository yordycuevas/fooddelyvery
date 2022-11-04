import React, { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "hamburger") {
      const filteredProducts = products.filter(
        (item) => item.category === "hamburger"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "pizza") {
      const filteredProducts = products.filter(
        (item) => item.category === "pizza"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "hotdog") {
      const filteredProducts = products.filter(
        (item) => item.category === "hotdog"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "drinks") {
      const filteredProducts = products.filter(
        (item) => item.category === "drinks"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" ms="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="hamburger">Hamburger</option>
                  <option value="pizza">Pizza</option>
                  <option value="hotdog">Hot Dog</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
            </Col>
            <Col lg="3" ms="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" ms="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are Found !</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;

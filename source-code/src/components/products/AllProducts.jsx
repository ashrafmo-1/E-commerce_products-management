import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import MainHeader from "../mainheader/MainHeader";
import NavgationBar from "../NavgationBar";
import { Link } from "react-router-dom";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import { add } from "../../Redux/slices/Cart-slice";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  // all apis
  const apiGET = "https://database-products.onrender.com/products";
  const apiCategory = "https://fakestoreapi.com/products/categories";

  // all fitches
  // get all products
  const GETALLPRODUCTS = () => {
    fetch(apiGET)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  // get all categories
  const GETALLCategory = () => {
    fetch(apiCategory)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  // get product on click product  const GETALLCategory
  const getProductByCatigory = (cat) => {
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    GETALLPRODUCTS();
    GETALLCategory();
  }, []);

  return (
    <div className="product master-producs-home pb-5">
      <MainHeader />
      <NavgationBar />
      <Container fluid className="pt-5">
        <div className="text-center">
          <button
            className="btn btn-success mx-1"
            onClick={() => GETALLPRODUCTS()}
          >
            all
          </button>
          {categories.map((category) => (
            <button
              className="btn btn-success mx-1"
              key={category}
              onClick={() => {
                getProductByCatigory(category);
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="products-container col-lg-16 pt-5 gap-3">
          {/* All products from api */}
          {products.map((prod) => (
            <div className={"product-card"} key={prod.id}>
              <img className="product-image" src={prod.image} alt="product" />
              <div className="card-content-body">
                <div className="card-title">{prod.title.slice(0, 10)}</div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <div className="card-price">${prod.price}</div>
                  <div className="card-rate">
                    {prod.rating.rate}
                    {<FaStar />}
                  </div>
                </div>
                <div className="flex-center gap-2">
                  <div
                    className="btn btn-outline-success mt-2"
                    onClick={() => {
                      dispatch(add(prod));
                      localStorage.setItem(
                        "product-information",
                        JSON.stringify(prod)
                      );
                    }}
                  >
                    add cart
                    <FaCartShopping />
                  </div>
                  <Link
                    to={`/${prod.id}`}
                    className={"btn btn-outline-danger mt-2"}
                  >
                    information
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;

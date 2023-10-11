import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./showProduct.css";
import NavgationBar from "./NavgationBar";

const ShowProduct = () => {
  const { productInformation } = useParams();
  const [product, setProduct] = useState([]);

  const API = `https://database-products.onrender.com/products/${productInformation}`;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <NavgationBar />
      <Container className="show-products flex-center">
        <div className="info flex-center gap-5 w-75 h-75">
          <img src={product.image} alt="" className="" />
          <div className="show-product-content">
            <span className="catigory">{product.category}</span>
            <h2 className="title mb-4">{product.title}</h2>
            <p className="description mb-3"> {product.description} </p>
            <div className="d-flex gap-5 align-items-center">
              <div className="quantity flex-center gap-3">
                <button className="btn btn-success">+</button>
                <span>1</span>
                <button className="btn btn-danger">-</button>
              </div>
              <p className="price flex-center">$999</p>
            </div>
            <p className="add-to-cart btn mt-4">add to cart</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShowProduct;

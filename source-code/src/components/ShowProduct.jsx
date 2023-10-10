import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <section className="show-products">
      <div className="info">
        <img src={product.image} alt="" />
        <div className="show-product-content">
          <span className="catigory">{product.category}</span>
          <h2 className="title">{product.title}</h2>
          <p className="description"> {product.description} </p>
          <p className="price">$999</p>
          <p className="adding">add to cart</p>
        </div>
      </div>
    </section>
  );
};

export default ShowProduct;

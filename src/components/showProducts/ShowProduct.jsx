import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./showProduct.css";
import NavgationBar from "../NavgationBar";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/slices/Cart-slice";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const { productInformation } = useParams();
  const [product, setProduct] = useState([]);
  // add product to cart and handel quantity
  const dispatsh = useDispatch();

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
            <div className="flex-center gap-2">
              <p className="price flex-center">price $999</p>
              <p
                className="add-to-cart btn"
                onClick={() => dispatsh(add(product))}
              >
                add to cart
              </p>
            </div>

            <div className="flex-center mt-3">
              <Link to='/' className=" btn btn-outline-primary"> Back To Home </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShowProduct;

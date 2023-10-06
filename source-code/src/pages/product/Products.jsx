import { useEffect, useState } from "react";
import "./Products.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/slices/cart-slice";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const api = "https://database-products.onrender.com/products";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 12)))
      .catch((error) => console.error("cant get any products", error));
  }, []);

  return (
    <div className="product master-producs-home pb-5">
      <Container fluid className="pt-5">
        <h1 className="main-title d-flex justify-content-between align-items-center">
          {"-"}Product
          <Link className="main-title-content">show more</Link>
        </h1>
        <div
          style={{ gap: "20px" }}
          className="products-container col-lg-16 pt-5"
        >
          {products.map((prod) => (
            <div className={"product-card"} key={prod.id}>
              <svg
                className="hart"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="24"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  d="M4.5 1C2.5673 1 1 2.49112 1 4.33081C1 5.81587 1.6125 9.34047 7.6416 12.9034C7.7496 12.9666 7.87358 13 8 13C8.12642 13 8.2504 12.9666 8.3584 12.9034C14.3875 9.34047 15 5.81587 15 4.33081C15 2.49112 13.4327 1 11.5 1C9.5673 1 8 3.01867 8 3.01867C8 3.01867 6.4327 1 4.5 1Z"
                  stroke="black"
                  fill="red"
                  strokeLinecap="round"
                />
              </svg>
              <img className="product-image" src={prod.image} alt="product" />
              <div className="card-content-body">
                <div className="card-title">{prod.title}</div>
                <div className="card-category">({prod.category})</div>
                <div className="icons-control">
                  <div className="card-rate flex-center">
                    {prod.rate} {<FaStar />}
                  </div>
                  <div
                    className="add-product-cart flex-center"
                    onClick={() => {
                      dispatch(add(prod));
                    }}
                  >
                    <FaCartShopping />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./Products.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/slices/Cart-slice";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const api = "https://database-products.onrender.com/products";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 8)))
      .catch((error) => console.error("cant get any products", error));
  }, []);

  return (
    <div className="product master-producs-home pb-5">
      <Container fluid className="pt-5">
        <h1 className="main-title d-flex justify-content-between align-items-center">
          Product <Link className="main-title-content">show more</Link>
        </h1>
        <div className="products-container col-lg-16 pt-5 gap-3">
          {products.map((prod) => (
            <div className={"product-card"} key={prod.id}>
              <img className="product-image" src={prod.image} alt="product" />
              <div className="card-content-body">
                <div className="card-title">{prod.title.slice(0, 10)}</div>
                <div className="card-description">
                  {prod.description.slice(0, 60)}
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
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
}

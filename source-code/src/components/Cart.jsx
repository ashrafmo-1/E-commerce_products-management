import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaOpencart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import {
  decrement,
  deleteAll,
  deleteProduct,
  increment,
} from "../Redux/slices/Cart-slice";

const Cart = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // cart products and sitting products
  const products = useSelector((state) => state.cart);
  // get total price for all products

  const total = products.reduce((acc, products) => {
    acc += products.price;
    return acc * products.quantity;
  }, 0);

  return (
    <>
      <div className="btn btn-primary cart-btn" onClick={handleShow}>
        <span className={"products-length"}>{products.length}</span>
        <FaOpencart />
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {products.length > 0 ? (
            <div>
              <div
                className={
                  "main-information-cart mb-5 pb-3 d-flex align-items-center justify-content-around"
                }
              >
                {/* remove all products from cart */}
                <button
                  className={"btn btn-danger"}
                  onClick={() => {
                    dispatch(deleteAll());
                  }}
                >
                  remove all
                </button>
                <p className={"total-price-cart"}>${total}</p>
              </div>
              {products.map((product) => (
                <section
                  className={
                    "product-content-cart d-flex align-items-center gap-3 mb-1 pb-4"
                  }
                  key={product.id}
                >
                  <img
                    src={product.image}
                    className={"product-image-cart"}
                    alt={"lala"}
                  />
                  <div className={"product-info"}>
                    <h3 className={"product-title"}>
                      {product.title.slice(0, 20)}
                    </h3>
                    <div className={"product-controls mt-3 text-center"}>
                      <div
                        className={
                          "quantity d-flex gap-2 justify-content-center"
                        }
                      >
                        <button
                          className={"btn btn-outline-success"}
                          onClick={() => dispatch(increment(product))}
                        >
                          +
                        </button>
                        <button className={"btn btn-outline-secondary"}>
                          {product.quantity * product.price}
                        </button>
                        <button className={"btn btn-outline-secondary"}>
                          {" "}
                          {product.quantity}{" "}
                        </button>
                        <button
                          className={"btn btn-outline-danger"}
                          onClick={() => dispatch(decrement(product))}
                        >
                          -
                        </button>
                      </div>
                      <button
                        className={"btn btn-outline-danger mt-2"}
                        onClick={() => dispatch(deleteProduct(product))}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <h4> yor cart is Empty </h4>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;

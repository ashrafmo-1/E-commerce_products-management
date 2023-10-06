import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaOpencart } from "react-icons/fa6";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const products = useSelector((state) => state.cart);

  return (
    <>
      <>
        <div className="btn btn-primary" onClick={handleShow}>
          <FaOpencart />
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Table striped>
              <thead>
                <tr>
                  <th>name</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <th>{product.title}</th>
                    <th> {product.price} </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </>
  );
};

export default Cart;

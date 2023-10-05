import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const ProductsCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Table striped size="sm" className={"mt-5 text-center"}>
      <thead>
        <tr>
          <th>id</th>
          <th>image</th>
          <th>name</th>
          <th>category</th>
          <th>price</th>
          <th>length</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              {" "}
              <img src={product.image} style={{ width: "40px" }} alt="" />
            </td>
            <td> {product.title.slice(0, 20)}.. </td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td className="d-flex justify-content-between align-items-center">
              <span> {product.quantity} </span>
            </td>
            <td> </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductsCart;

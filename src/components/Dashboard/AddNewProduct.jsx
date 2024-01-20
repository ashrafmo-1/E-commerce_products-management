import { useState } from "react";
import "./AddNewProduct.css";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const navite = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");

  const PostProducts = (e) => {
    e.preventDefault();

    const API = "https://database-products.onrender.com/products";

    fetch(API, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
        category: category,
        image: photo,
      }),
    })
      .then((res) => res.json())
      .then(() => navite("/dashboard/ProductsManagement"))
      .catch((err) => console.error("cant get product", err));
  };

  return (
    <div style={{ height: "calc(100vh - 56px)" }} className={"flex-center"}>
      <form className="product-form" onSubmit={PostProducts}>
        <label>
          <span>product title</span>
          <input
            type="text"
            className="product-faild"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>price</span>
          <input
            type="number"
            className="product-faild"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          <span>category</span>
          <input
            type="text"
            className="product-faild"
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <label>
          <span>link photo</span>
          <input
            type="text"
            className="product-faild"
            onChange={(e) => setPhoto(e.target.value)}
          />
        </label>

        <label></label>

        <button className="submit">add product</button>
      </form>
    </div>
  );
};

export default AddNewProduct;

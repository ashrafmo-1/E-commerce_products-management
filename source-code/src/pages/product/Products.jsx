import ProductCard from "../../components/Products/ProductCard";
import { useEffect, useState } from "react";
import "./Products.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const api = "https://database-products.onrender.com/products";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 15)));
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
          {products.map((product) => (
            <div className={"product-card"} key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title.slice(0, 10)}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

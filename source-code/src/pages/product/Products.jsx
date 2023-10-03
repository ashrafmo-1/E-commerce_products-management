// import style
import "./Products.css";
import ProductCard from "../../components/Products/ProductCard";
import {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";

export default function Products() {
    const [products, setProducts] = useState([]);
    const api = 'https://database-products.onrender.com/products'
    useEffect(() => {
        fetch(api).then((response) => response.json()).then((data) => setProducts(data))
    }, []);

  return (
    <>
      <div id="product" className="product">
        <h1 className={'main-title'}>Product</h1>
        <div style={{ gap: "20px" }} className="imgs col-lg-16 ">s
            {products.map(product => (
                <Card style={{width: '14rem'}} className={'d-flex align-items-center'} key={product.id}>
                <ProductCard image={product.image} title={product.title.slice(0, 10)} description={product.category} />
                </Card>
            ))}
        </div>
      </div>
    </>
  );
}

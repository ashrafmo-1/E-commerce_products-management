import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

import "./swiper.css";

const Swiper = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [poducts, setPoducts] = useState([]);
  const api = "https://database-products.onrender.com/products";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setPoducts(data));
  }, []);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={"swiper-products"}
      nextIcon={
        <span
          aria-hidden="true"
          className="carousel-control-next-icon next-icon-Renew"
        />
      }
      prevIcon={
        <span
          aria-hidden="true"
          className="carousel-control-prev-icon prev-icon-Renew"
        />
      }
    >
      {poducts.map((product) => (
        <Carousel.Item
          className=""
          style={{
            background: "#DEEBFE",
            padding: "10px 0px",
            height: "300px",
          }}
          interval={1000}
          key={product.id}
        >
          <div className="flex-center flex-row">
            <img
              className="py-3 m-lg-2"
              style={{ height: "250px", width: "270px" }}
              src={product.image}
              alt={product.title}
            />
            <div>
              <h2> {product.title.slice(0, 15)} </h2>
              <p className="">( {product.category} ) </p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Swiper;

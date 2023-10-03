import Carousel from "react-bootstrap/Carousel";
import {useEffect, useState} from "react";
// images test
import image1 from "../../assets/images/f2.jpg";

const Swiper = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [poducts, setPoducts] = useState([]);
  const api = 'https://database-products.onrender.com/products';
  useEffect(() => {
    fetch(api).then((response) => response.json()).then((data) => setPoducts(data))
  }, []);


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={'swiper-products'}>
        {poducts.map((product) => (
      <Carousel.Item style={{ background: "rgba(0,112,255,0.58)", padding: '10px 0px' }} interval={2000} key={product.id}>
        <div className="flex-center flex-row">
          <img className="py-3 m-lg-2" style={{ height: "200px", width: "220px" }} src={product.image} alt="First slide" />
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
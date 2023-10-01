import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
// images test
import image1 from "../../assets/images/f2.jpg";
import image2 from "../../assets/images/f3.jpg";

const Swiper = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{ background: "rgba(0,112,255,0.58)", padding: '10px 0px' }} interval={2000}>
        <div className="flex-center flex-row">
          <img
            className="py-3 m-lg-2"
            style={{ height: "200px", width: "220px" }}
            src={image1}
            alt="First slide"
          />
          <div>
            <h2>offer 30%</h2>
            <p className="">hello product</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ background: "#999", padding: '10px 0px' }} interval={2000}>
        <div className="flex-center flex-row ">
          <img
            className="py-3 m-lg-2"
            style={{ height: "200px", width: "220px" }}
            src={image2}
            alt="First slide"
          />
          <div>
            <h2>offer 30%</h2>
            <p className="">hello product</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
export default Swiper;

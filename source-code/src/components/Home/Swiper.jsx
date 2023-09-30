import Carousel from 'react-bootstrap/Carousel';
import c from '../../assets/images/R.jpg'
import {useState} from "react";
const Swiper = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item style={{background: '#999'}} interval={2000}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img className='py-3 m-lg-2'  style={{ height: "200px", width: "220px" }} src={c} alt="First slide" />
                        <div>
                            <h2>offer 30%</h2>
                            <p className=''>hello product</p>
                        </div>
                    </div>
                </Carousel.Item>
            <Carousel.Item style={{background: '#999'}} interval={2000}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img className='py-3 m-lg-2'  style={{ height: "200px", width: "220px" }} src={c} alt="First slide" />
                        <div>
                            <h2>offer 30%</h2>
                            <p className=''>hello product</p>
                        </div>
                    </div>
                </Carousel.Item>
        </Carousel>
    )
}
 export default Swiper
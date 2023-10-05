import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
const ProductCard = (props) => {
  return (
    <>
      <img className="product-image" src={props.image} alt="product" />
      <div className="card-content-body">
        <div className="card-title">{props.title}</div>
        <div className="card-category">({props.category})</div>
        <div className="icons-control">
          <div className="card-rate flex-center">
            {props.rate} {<FaStar />}
          </div>
          <div className="add-product-cart flex-center">
            <FaCartShopping />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

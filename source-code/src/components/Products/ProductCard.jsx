import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import addProduct from "../../Redux/slices/Cart-slice";

const ProductCard = (props) => {
  // add product to cart
  const dispatch = useDispatch();

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
          <div
            className="add-product-cart flex-center"
            onClick={() => {
              dispatch(addProduct(props.addProuct));
            }}
          >
            <FaCartShopping />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

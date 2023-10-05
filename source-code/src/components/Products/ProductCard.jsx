const ProductCard = (props) => {
  return (
    <>
      <img className="product-image" src={props.image} alt="product" />
      <div className="card-content-body">
        <div className="card-title">
          {props.title} ({props.category})
        </div>
        <div className="icons-control"></div>
      </div>
    </>
  );
};

export default ProductCard;

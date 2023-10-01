import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Card style={{ width: "13rem" }}>
      <Card.Img style={{ height: "10rem" }} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ height: "5rem" }}> {props.description} </Card.Text>
        <div className="stars">
          <i style={{ color: "gold" }} className="fa-solid fa-star"></i>
          <i style={{ color: "gold" }} className="fa-solid fa-star"></i>
          <i style={{ color: "gold" }} className="fa-solid fa-star"></i>
          <i style={{ color: "gold" }} className="fa-solid fa-star"></i>
          <i style={{ color: "gold" }} className="fa-solid fa-star"></i>
          <Link
            style={{
              marginLeft: "30px",
              textDecoration: "none",
              color: "red",
              fontSize: "30px",
            }}
            className="icon"
          >
            <i className="fa-solid fa-store"> </i>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

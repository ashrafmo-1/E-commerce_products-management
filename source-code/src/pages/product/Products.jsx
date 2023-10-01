import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

import f2 from "../../assets/images/f2.jpg";
import f3 from "../../assets/images/f3.jpg";
import f5 from "../../assets/images/f5.jpg";

// import style
import "./Products.css";

export default function Products() {
  return (
    <>
      <div id="product" className="product">
        <h1 style={{ color: " black" }}>Product</h1>
        <div style={{ gap: "20px" }} className="imgs col-lg-16 ">
          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f2} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f3} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f5} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f2} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f3} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f5} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f2} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f3} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f5} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "13rem" }}>
            <Card.Img style={{ height: "10rem" }} variant="top" src={f2} />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text style={{ height: "7rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
                  className='"icon"'
                >
                  {" "}
                  <i className="fa-solid fa-store"> </i>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

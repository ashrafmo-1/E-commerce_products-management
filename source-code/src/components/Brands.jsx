import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import beand1 from "../assets/images/brand/41DBT9pEGmS._AC_SY200_.jpg";
import beand2 from "../assets/images/brand/81uTW77d3rL._AC_SL1500_.jpg";
import beand3 from "../assets/images/brand/XCM_Manual_1498352_5199182_200x200_1X._CB604510533_.jpg";
import beand4 from "../assets/images/brand/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg";
import beand5 from "../assets/images/brand/f0b67b05-81b2-4271-9bb2-55b0dbe794a0.webp";

export const Brands = () => {
  return (
    <Container>
      <Col>
        <Row className="gap-4 justify-content-center">
          <Card style={{ width: "14rem" }} className="mt-3 align-items-center">
            <Card.Img
              variant="top"
              src={beand1}
              style={{ width: "10rem", height: "6rem", padding: "1rem" }}
            />
            <Card.Body>
              <Card.Title className="text-center"> electrec </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "14rem" }} className="mt-3 align-items-center">
            <Card.Img
              variant="top"
              src={beand2}
              style={{ width: "10rem", height: "6rem", padding: "1rem" }}
            />
            <Card.Body>
              <Card.Title className="text-center"> electrec </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "14rem" }} className="mt-3 align-items-center">
            <Card.Img
              variant="top"
              src={beand3}
              style={{ width: "10rem", height: "6rem", padding: "1rem" }}
            />
            <Card.Body>
              <Card.Title className="text-center"> electrec </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "14rem" }} className="mt-3 align-items-center">
            <Card.Img
              variant="top"
              src={beand4}
              style={{ width: "10rem", height: "6rem", padding: "1rem" }}
            />
            <Card.Body>
              <Card.Title className="text-center"> electrec </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};
export default Brands;

//   <Card style={{ width: "14rem" }} className="mt-3">
//     <Card.Img
//       variant="top"
//       src={beand2}
//       style={{ width: "10rem", height: "10rem" }}
//     />
//     <Card.Body>
//       <Card.Title className="text-center"> laptop </Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: "14rem" }} className="mt-3">
//     <Card.Img variant="top" src={beand3} />
//     <Card.Body>
//       <Card.Title className="text-center"> miusec </Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: "14rem" }} className="mt-3">
//     <Card.Img variant="top" src={beand4} />
//     <Card.Body>
//       <Card.Title className="text-center"> smart </Card.Title>
//     </Card.Body>
//   </Card>
//   <Card style={{ width: "14rem" }} className="mt-3">
//     <Card.Img variant="top" src={beand5} />
//     <Card.Body>
//       <Card.Title className="text-center"> electrec </Card.Title>
//     </Card.Body>
//   </Card>

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";import NavDropdown from 'react-bootstrap/NavDropdown';

const NavgationBar = () => {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="" className={"fw-bold"}> E-commerce </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '120px' }} navbarScroll>
          <Nav className="me-auto">
            <Nav.Link href=""> <Form.Control style={{width: '400px'}} type="text" placeholder="Search" className="mr-sm-2" /> </Nav.Link>
            <Nav.Link href=""> <Button className={"mx-1"} variant="success"> login/signUp </Button> </Nav.Link>
            <Cart />
          </Nav>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavgationBar;
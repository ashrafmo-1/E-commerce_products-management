import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import {BsCart4} from "react-icons/bs";
import Btns from "./BTN/Btns";

const NavgationBar = () => {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Link to="/" className={"fw-bold"}> E-commerce </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '120px' }} navbarScroll>
            <Link to="/signup"> <Button className={"mx-1"} variant="success"> login/signUp </Button> </Link>
            <Cart />
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavgationBar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import {HiBars3BottomLeft} from "react-icons/hi2";

const NavgationBar = () => {

  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Link className={"navbar-toggle-bars btn btn-outline-dark mx-4"}>
          {" "}
          <HiBars3BottomLeft />{" "}
        </Link>
        <Link to="/" className={"fw-bold navbar-brand"}>
          {" "}
          M&A store{" "}
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "120px" }}
            navbarScroll
          >
            {window.localStorage.getItem("email") ? (
              <Link
                to="/signup"
                onClick={(logout) => {
                  window.localStorage.removeItem("email");
                  window.location.pathname = "/";
                }}
              >
                {" "}
                <Button className={"mx-1"} variant="danger">
                  {" "}
                  logout
                </Button>{" "}
              </Link>
            ) : (
              <Link to="/signup">
                {" "}
                <Button className={"mx-1"} variant="success">
                  {" "}
                  login/signUp{" "}
                </Button>{" "}
              </Link>
            )}

            <Link to="/cart"> cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavgationBar;


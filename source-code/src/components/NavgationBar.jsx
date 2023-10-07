import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const NavgationBar = () => {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      style={{ borderTop: "1px solid #777", borderBottom: "1px solid #777" }}
    >
      <Container>
        <Link to="/" className={"fw-bold navbar-brand text-danger"}>
          M&A store
        </Link>
        <Navbar.Toggle className="bg-danger" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-lg-0 gap-3"
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
                <div className={"btn btn-danger"} variant="danger">
                  logout
                </div>
              </Link>
            ) : (
              <Link to="/signup">
                <div className={"btn btn-danger"} variant="success">
                  login/signUp
                </div>
              </Link>
            )}
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavgationBar;

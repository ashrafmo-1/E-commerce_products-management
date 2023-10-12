import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { FaBarsStaggered } from "react-icons/fa6";

const NavgationBar = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-color bg-gradient">
      <Container>
        <button className="btn btn-outline-dark" style={{ marginRight: "10px" }}>
          {" "}
          <FaBarsStaggered />{" "}
        </button>
        <Link to="/" className={"fw-bold fs-5 text-light"}>
          Dragon store
        </Link>
        <Navbar.Toggle className="bg-primary" aria-controls="navbarScroll" />
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
                <div className={"btn btn-dark"}>login/signUp</div>
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

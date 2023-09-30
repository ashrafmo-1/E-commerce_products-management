import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavgationBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className={'fw-bold'}>E-commerce</Navbar.Brand>
        <Nav className="ms-auto">
          <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
          />
          <Button className={'mx-1'} variant="success">login/signUp</Button>
            <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavgationBar;
